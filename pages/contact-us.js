import Layout from "@/components/layout";
import MyTechSection from "@/components/tech-sec";
import React from "react";

const TechStack = () => {
  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "53vh" }}
      >
        <div>
          <h1 className="color_1E0E62 fs_58 fs_lg_30 fw_500">
            For any questions please mail us:
          </h1>
          <p className="text-center color_42446E fw_500 fs_lg_30 fs_50">
            imankhan.coorg@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
