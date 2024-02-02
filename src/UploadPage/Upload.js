import React, { useState } from "react";
import * as XLSX from "xlsx";
import Dropdown from "../DropdownMenu/Dropdown";
import logo2 from "../images/logo2.svg";
import avatar from "../images/avatar.svg";
import bell from "../images/bell.svg";
import upload from "../images/Upload.svg";
import Notification from "../images//Notification.svg";
import calander from "../images/Calendar.svg";
import schedule from "../images/Document.svg";
import settings from "../images/Setting.svg";
import invoice from "../images/Ticket.svg";
import dashboard from "../images/Category.svg";
import uploadIcon from "../images/uploadIcon.svg";
import excelupload from "../images/excelupload.svg";
import close from "../images/close.svg";
import close2 from "../images/plus.svg";
import threeLines from "../images/threeLines.svg";
import "./Upload.css";

const Upload = () => {
  const [objData, setObjData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFileName(file.name);
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const wb = XLSX.read(e.target.result, { type: "buffer" });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      var data = XLSX.utils.sheet_to_json(ws);
      setObjData(
        data.map((a) => {
          return { ...a, selectedTags: [] };
        })
      );
    };
  };

  function onSelect(data, indx) {
    setObjData((prev) => {
      return prev.map((a, i) => {
        if (prev[indx].selectedTags.includes(data)) return a;
        return i === indx
          ? { ...a, selectedTags: [...prev[indx].selectedTags, data] }
          : a;
      });
    });
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFileName(file.name);

    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const wb = XLSX.read(e.target.result, { type: "buffer" });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      var data = XLSX.utils.sheet_to_json(ws);
      setObjData(
        data.map((a) => {
          return { ...a, selectedTags: [] };
        })
      );
    };
  };

  const menuToggle = () => {
    setToggle(!toggle);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  function handleFilter(data, indx) {
    setObjData((prev) => {
      return prev.map((a, i) => {
        let tempData = prev[indx].selectedTags.filter((a) => a !== data);
        return i === indx ? { ...a, selectedTags: tempData } : a;
      });
    });
  }

  return (
    <div className={"outer"}>
      <div className={toggle ? "menu_toggle" : "menu"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            className={"menu_logo"}
            style={{ alignSelf: "center" }}
            src={logo2}
            alt="logo2"
          />
          <img
            onClick={menuToggle}
            className={"close2"}
            src={close2}
            style={{ cursor: "pointer" }}
            alt="close2"
          />
        </div>
        <div className={"menu_options"}>
          <img className="menu_option" src={dashboard} alt="dashboard" />
          <h3 className="menu_title">Dashboard</h3>
        </div>
        <div className={"menu_options"}>
          <img className="menu_option_selected" src={upload} alt="upload" />
          <h3 className="menu_title_selected">Upload</h3>
        </div>
        <div className={"menu_options"}>
          <img className="menu_option" src={invoice} alt="invoice" />
          <h3 className="menu_title">Invoice</h3>
        </div>
        <div className={"menu_options"}>
          <img className="menu_option" src={schedule} alt="schedule" />
          <h3 className="menu_title">Schedule</h3>
        </div>
        <div className={"menu_options"}>
          <img className="menu_option" src={calander} alt="calender" />
          <h3 className="menu_title">Calender</h3>
        </div>
        <div className={"menu_options"}>
          <img
            style={{ marginLeft: "2rem" }}
            src={Notification}
            alt="notifications"
          />
          <h3 className="menu_title">Notification</h3>
        </div>
        <div className={"menu_options"}>
          <img style={{ marginLeft: "2rem" }} src={settings} alt="settings" />
          <h3 className="menu_title">Settings</h3>
        </div>
      </div>
      <div className={"right"}>
        <div className={"right_header"}>
          <div className={"combined_toggle"}>
            <img
              className={"title_logo"}
              style={{
                alignSelf: "center",
                marginRight: "1.5rem",
                cursor: "pointer",
              }}
              src={threeLines}
              onClick={menuToggle}
              alt="toggle"
            />
            <img
              className={"title_logo"}
              style={{ alignSelf: "center" }}
              src={logo2}
              alt="logo2"
            />
          </div>
          <span
            className={"span_main_title"}
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Upload CSV
          </span>
          <div className="right_icons">
            <img src={bell} alt="notification" />
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className={"right_content"}>
          <span
            className={"span_title"}
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            Upload CSV
          </span>
          <div className={"upload"}>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={"upload_inner"}
              onClick={() => {}}
            >
              <img
                style={{ marginBottom: "1.5rem" }}
                src={excelupload}
                alt="excelIcon"
              />
              {fileName.length > 0 ? (
                <>
                  <span>{fileName}</span>
                  <span
                    style={{ color: "#D33030", marginTop: "1rem" }}
                    onClick={() => {
                      setFileName("");
                      setObjData(null);
                      document.getElementById("fileInput").value = "";
                    }}
                  >
                    Remove
                  </span>
                </>
              ) : (
                <span style={{ color: "#999CA0" }}>
                  Drop your excel sheet here or{" "}
                  <span
                    style={{ color: "var(--primary)" }}
                    onClick={() => {
                      document.getElementById("fileInput").click();
                    }}
                  >
                    Browse
                  </span>
                </span>
              )}
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </div>
            <button
              onClick={() => {
                document.getElementById("fileInput").click();
              }}
            >
              <img src={uploadIcon} alt="uploadIcon" />
              <span
                style={{
                  color: "white",
                  marginLeft: "1rem",
                  fontWeight: "bold",
                }}
              >
                Upload
              </span>
            </button>
          </div>
        </div>
        {objData ? (
          <>
            <span
              className={"table_title"}
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "2rem",
                alignSelf: "flex-start",
              }}
            >
              Uploads
            </span>
            <div
              style={{
                height: "100%",
                maxHeight: "30rem",
                maxWidth: "100%",
                overflow: "scroll",
              }}
            >
              <div className={"excel_table"}>
                <div className={"table_row_head"}>
                  <div>SI No.</div>
                  <div>Links</div>
                  <div>Prifix</div>
                  <div>Add Tags</div>
                  <div>Selected Tags</div>
                </div>
                {objData?.map((val, i) => {
                  return (
                    <div key={i} className={"table_row"}>
                      <div>{parseInt(val.id) < 10 ? `0${val.id}` : val.id}</div>
                      <div
                        style={{
                          textDecoration: "underline",
                          color: "#5B93FF",
                        }}
                      >
                        {val.links}
                      </div>
                      <div>{val.prefix}</div>
                      <div>
                        <Dropdown
                          onSelect={(data) => {
                            onSelect(data, i);
                          }}
                          data={val["select tags"].split(",")}
                        />
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {val.selectedTags.map((a, indx) => {
                          return (
                            <div
                              key={indx}
                              className={"tag"}
                              onClick={() => handleFilter(a, i)}
                            >
                              <span style={{ marginRight: "1rem" }}>{a}</span>
                              <img alt="close" src={close} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Upload;
