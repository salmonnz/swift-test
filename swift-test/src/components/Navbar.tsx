import React from "react";
import styles from "../components/Test1.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Select } from "antd";
import { SelectValue } from "antd/lib/select"; // เพิ่ม import นี้

type Props = {};

const Navbar = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <nav className={styles.navbar}>
      <Select
        defaultValue={selectedLanguage}
        style={{
          width: 60,
        }}
        onChange={(value: SelectValue) => changeLanguage(value as string)}
        options={[
          {
            value: "th",
            label: "th",
          },
          {
            value: "en",
            label: "en",
          },
        ]}
      />
    </nav>
  );
};

export default Navbar;
{
  /* <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">{t("languages.english")}</option>
        <option value="es">{t("languages.spanish")}</option>
      </select>
    </div> */
}
