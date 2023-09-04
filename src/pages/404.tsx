import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <Layout title="404 not found">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          priority
          src="/404.png"
          alt="404 not found"
          width={598}
          height={330}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
