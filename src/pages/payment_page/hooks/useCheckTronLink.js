import { useState, useCallback, useEffect } from "react";


/** 检测波场钱包的支付环境 **/
export default function useCheckTronLink() {
  const [check_wallet_status, set_check_wallet_status] = useState("");
  const [check_status_message, set_check_status_message] = useState("UNREADY");

  const handleCheckTronLink = useCallback(async () => {
    if (!window.tronLink) {
      await set_check_wallet_status("NOINSTALL");
      await set_check_status_message("请安装tronLink钱包");
      return false;
    }
    if (!window.tronWeb.defaultAddress.base58) {
      await set_check_wallet_status("NOACTIVED");
      await set_check_status_message("请激活钱包");
      return false;
    }
    /** 测试环境支持的节点 **/
    if (process.env.NODE_ENV === "development") {
      if (window.tronWeb.fullNode.host !== "https://api.nileex.io") {
        await set_check_wallet_status("HOSTERROR");
        await set_check_status_message("当前网络节点不支持支付,选择正确的网络节点");
        return false;
      }
    }
    /** 生产环境支持的节点 **/
    if (process.env.NODE_ENV === "production") {
      if (window.tronWeb.fullNode.host !== "https://api.trongrid.io") {
        await set_check_wallet_status("HOSTERROR");
        await set_check_status_message("当前网络节点不支持支付,选择正确的网络节点");
        return false;
      }
    }
    await set_check_wallet_status("READY");
    await set_check_status_message("钱包已就位");
  }, []);

  useEffect(() => {
    window.tronLink ? handleCheckTronLink() : void (0);
    window.addEventListener("message", handleCheckTronLink);
    window.addEventListener('tronLink#initialized', handleCheckTronLink);
    return () => {
      window.removeEventListener("message", handleCheckTronLink);
      window.removeEventListener('tronLink#initialized', handleCheckTronLink);
    };
  }, []);

  return [check_wallet_status, check_status_message];
};