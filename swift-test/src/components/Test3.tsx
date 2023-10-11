import React from "react";
import styles from "../components/Test3.module.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Button, Form, Input, Empty, Table, Select } from "antd";

type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Test3 = (props: Props) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div className={styles.bgnav}>
      <Navbar />
      <h1 className={styles.h1}>
        การจัดการหน้าฟอร์ม
        <Link className={styles.linkto} to="/">
          <button className={styles.spantoback}>หน้าหลัก</button>
        </Link>
      </h1>
      <div className={styles.divflex}>
        <section className={styles.boxform}>
          {/* in form */}
          {/* dont forget to use form */}
          <div className={styles.firstinput}>
            <div className={styles.firstpick}>
              คำนำหน้า
              <Select
                placeholder="คำนำหน้า"
                style={{
                  width: 80,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Mr.",
                    label: "Mr.",
                  },
                  {
                    value: "Miss",
                    label: "Miss",
                  },
                  {
                    value: "Mrs.",
                    label: "Mrs.",
                  },
                ]}
              />
            </div>
            <div>1.2</div>
            <div>1.3</div>
          </div>
          <div className={styles.secondinput}>
            <div className={styles.secondpickdate}>
              วันเกิด:
              <DatePicker
                placeholder="dd/mm/yy"
                className={styles.secondpickdatebox}
                defaultValue={dayjs("01/01/1990", dateFormatList[0])}
                format={dateFormatList}
              />
            </div>
            <div>2.2</div>
          </div>
          <div className={styles.thirdinput}>
            <div>3.1</div>
            <div>3.2</div>
            <div>3.3</div>
            <div>3.4</div>
            <div>3.5</div>
          </div>
          <div className={styles.fourthinput}>
            <div>4.1</div>
          </div>
          <div className={styles.fifthinput}>
            <div>5.1</div>
            <div>5.2</div>
          </div>
          <div className={styles.sixthinput}>
            <div>6.1</div>
          </div>
          <div className={styles.seventhinput}>
            <div>7.1</div>
            <div>7.2</div>
            <div>7.3</div>
          </div>
        </section>
      </div>
      <div>
        {/* table ant learing */}
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>

      {/* <div className={styles.footer}>
        <div>1</div>
        <div>1</div>
      </div>
      <div className={styles.databox}>
        <div>ชื่อ</div>
        <div>เพศ</div>
        <div>มือถือ</div>
        <div>สัญชาติ</div>
        <div>จัดการ</div>
      </div>
      <div className={styles.showdatabox}>
        <Empty
          className={styles.emptyicon}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div> */}
    </div>
  );
};

export default Test3;
