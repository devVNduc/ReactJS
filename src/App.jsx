/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
// import { useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/counterSlice";
// import Child from "./child";
// export default function Counter() {

//   const dispatch = useDispatch();
 
//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment(9))}
//         >
//           Increment
//         </button>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement(9))}
//         >
//           Decrement
//         </button>
//       </div>
//       <Child/>
//     </div>
//   );
// }
// custom hook
// import "./assets/css/index.css"
// import { useEffect, useState,useRef } from "react";
// import axios from "axios";
// function customHook(url){
//   let [data, setData] = useState([]);
//   const isMouted = useRef(true)
//   isMouted.current = true;
//   useEffect(() => {
//     var config = {
//       method: "get",
//       maxBodyLength: Infinity,
//       url: url,
//     };
//     axios
//       .request(config)
//       .then((response) => {
//         if (!isMouted.current == true){ 
//           setData(response?.data?.data);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [url])
//   return data;
// }
// export default function App() {

//   return (
//     <>
//       <header className="masthead">
//         <div className="boards-menu">
//           <button className="boards-btn btn">
//             <i className="fab fa-trello boards-btn-icon"></i>Boards
//           </button>

//           <div className="board-search">
//             <input
//               type="search"
//               className="board-search-input"
//               aria-label="Board Search"
//             />
//             <i className="fas fa-search search-icon" aria-hidden="true"></i>
//           </div>
//         </div>

//         <div className="logo">
//           <h1>
//             <i className="fab fa-trello logo-icon" aria-hidden="true"></i>Trello
//           </h1>
//         </div>

//         <div className="user-settings">
//           <button className="user-settings-btn btn" aria-label="Create">
//             <i className="fas fa-plus" aria-hidden="true"></i>
//           </button>

//           <button className="user-settings-btn btn" aria-label="Information">
//             <i className="fas fa-info-circle" aria-hidden="true"></i>
//           </button>

//           <button className="user-settings-btn btn" aria-label="Notifications">
//             <i className="fas fa-bell" aria-hidden="true"></i>
//           </button>

//           <button className="user-settings-btn btn" aria-label="User Settings">
//             <i className="fas fa-user-circle" aria-hidden="true"></i>
//           </button>
//         </div>
//       </header>

//       <section className="board-info-bar">
//         <div className="board-controls">
//           <button className="board-title btn">
//             <h2>Web Development</h2>
//           </button>

//           <button className="star-btn btn" aria-label="Star Board">
//             <i className="far fa-star" aria-hidden="true"></i>
//           </button>

//           <button className="personal-btn btn">Personal</button>

//           <button className="private-btn btn">
//             <i
//               className="fas fa-briefcase private-btn-icon"
//               aria-hidden="true"
//             ></i>
//             Private
//           </button>
//         </div>

//         <button className="menu-btn btn">
//           <i className="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>
//           Show Menu
//         </button>
//       </section>

//       <section className="lists-container">
//         <div className="list">
//           <h3 className="list-title">Tasks to Do</h3>

//           <ul className="list-items">
//             {/* <li>Complete mock-up for client website</li>
//             <li>Email mock-up to client for feedback</li>
//             <li>Update personal website header background image</li>
//             <li>Update personal website heading fonts</li>
//             <li>Add google map to personal website</li>
//             <li>Begin draft of CSS Grid article</li>
//             <li>Read new CSS-Tricks articles</li>
//             <li>Read new Smashing Magazine articles</li>
//             <li>Read other bookmarked articles</li>
//             <li>Look through portfolios to gather inspiration</li>
//             <li>Create something cool for CodePen</li>
//             <li>Post latest CodePen work on Twitter</li>
//             <li>Listen to new Syntax.fm episode</li>
//             <li>Listen to new CodePen Radio episode</li> */}

//             {customHook("./tasks")?.map((item) => (
//               <div key={item.id}>
//                 <li>{item.attributes.title}</li>
//               </div>
//             ))}
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">Completed Tasks</h3>

//           <ul className="list-items">
//             <li>Clear email inbox</li>
//             <li>Finalise requirements for client web design</li>
//             <li>Begin work on mock-up for client website</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">Topics/Concepts to Revise</h3>

//           <ul className="list-items">
//             <li>HTML Elements</li>
//             <li>HTML Form Validation</li>
//             <li>HTML Structured Data</li>
//             <li>Advanced CSS Selectors</li>
//             <li>CSS Transforms</li>
//             <li>CSS Animations</li>
//             <li>CSS Flexbox</li>
//             <li>CSS Grid</li>
//             <li>CSS Methodologies (BEM, SMACSS etc.)</li>
//             <li>SASS/SCSS</li>
//             <li>Layout Fallbacks</li>
//             <li>Responsive Design</li>
//             <li>Design Patterns</li>
//             <li>JavaScript Fundamentals</li>
//             <li>JavaScript OOP</li>
//             <li>JavaScript DOM Manipulation</li>
//             <li>JavaScript Debugging Techniques</li>
//             <li>Node Package Manager</li>
//             <li>Grunt/Gulp</li>
//             <li>GitHub</li>
//             <li>Git Commands</li>
//             <li>Web Accessibility</li>
//             <li>Web Performance</li>
//             <li>Web Hosting</li>
//             <li>Browser Dev Tools</li>
//             <li>Google Analytics</li>
//             <li>Basic Photoshop/Sketch Usage</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">Topics/Concepts to Learn</h3>

//           <ul className="list-items">
//             <li>HTML 5.2 New Features</li>
//             <li>Responsive Images (picture element, srcset/sizes etc.)</li>
//             <li>Serverless</li>
//             <li>Variable Fonts</li>
//             <li>Shadow DOM</li>
//             <li>ES6+</li>
//             <li>JSON & AJAX</li>
//             <li>API's</li>
//             <li>JavaScript Patterns</li>
//             <li>JavaScript Testing</li>
//             <li>jQuery</li>
//             <li>SVG</li>
//             <li>React JS</li>
//             <li>Angular JS</li>
//             <li>TypeScript</li>
//             <li>Vue JS</li>
//             <li>Node JS</li>
//             <li>Webpack</li>
//             <li>SEO Techniques</li>
//             <li>HTML Emails</li>
//             <li>WordPress</li>
//             <li>Static Site Generators (Jekyll, Hugo, Gatsby etc.)</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">Useful Websites for Learning</h3>

//           <ul className="list-items">
//             <li>Code Academy</li>
//             <li>CodePen</li>
//             <li>Codrops</li>
//             <li>CSS-Tricks</li>
//             <li>Free Code Camp</li>
//             <li>Khan Academy</li>
//             <li>Lynda</li>
//             <li>Medium</li>
//             <li>Mozilla Developer Network</li>
//             <li>Stack Overflow</li>
//             <li>Team Treehouse</li>
//             <li>Tuts Plus</li>
//             <li>Udemy</li>
//             <li>WPSessions</li>
//             <li>YouTube</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">Web Dev YouTube Channels</h3>

//           <ul className="list-items">
//             <li>Adam Khoury</li>
//             <li>Brad Hussey</li>
//             <li>CSS-Tricks (Chris Coyier)</li>
//             <li>Derek Banas</li>
//             <li>DevTips (Travis Neilson)</li>
//             <li>Free Code Camp</li>
//             <li>Fun Fun Function (Mattias Petter Johansson)</li>
//             <li>Google Chrome Developers</li>
//             <li>Layout Land (Jen Simmons)</li>
//             <li>Learn Code Academy</li>
//             <li>Level Up Tuts (Scott Tolinski)</li>
//             <li>Mackenzie Child</li>
//             <li>Rachel Andrew</li>
//             <li>The Net Ninja (Shaun Pelling)</li>
//             <li>The New Boston (Bucky Roberts)</li>
//             <li>Traversy Media (Brad Traversy)</li>
//             <li>Wes Bos</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">CodePen Ideas</h3>

//           <ul className="list-items">
//             <li>Something cool with CSS Grid</li>
//             <li>Something cool with CSS Flexbox</li>
//             <li>Something cool with CSS animations</li>
//             <li>Something cool with CSS gradients</li>
//             <li>Something cool with CSS pseudo-elements</li>
//             <li>Something cool with SVG</li>
//             <li>Something cool with JavaScript</li>
//             <li>Something cool with all of the above</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">Practise Website Ideas</h3>

//           <ul className="list-items">
//             <li>Airsoft/Paintballing Centre</li>
//             <li>Bar/Pub</li>
//             <li>Bicycle Shop/Repair</li>
//             <li>Cafe/Coffee Shop</li>
//             <li>Car Showroom/Garage/Repair/Parts</li>
//             <li>Construction Company</li>
//             <li>Fitness/Gym/Leisure Centre</li>
//             <li>Nightclub</li>
//             <li>Party Planning Company</li>
//             <li>PC Build/Repair Service</li>
//             <li>Portfolio/CV</li>
//             <li>Real Estate/AirBnB</li>
//             <li>Restaurant</li>
//             <li>Skiing/Snowboarding Centre/Company</li>
//             <li>Streaming Service for Movies/TV</li>
//             <li>Streaming Service for Video Games</li>
//             <li>Taxi Service</li>
//             <li>Travel Agency</li>
//             <li>Zoo/Safari Park</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <div className="list">
//           <h3 className="list-title">JavaScript Project Ideas</h3>

//           <ul className="list-items">
//             <li>Analog Clock</li>
//             <li>Basic Quiz</li>
//             <li>Bill/Cost Splitter</li>
//             <li>Countdown Timer</li>
//             <li>Form Validator</li>
//             <li>Geolocation (Find places near you etc.)</li>
//             <li>Gif Search</li>
//             <li>Note Taking App</li>
//             <li>Random Name Picker</li>
//             <li>Secret Message Encoder/Decoder</li>
//             <li>Sortable Image Gallery</li>
//             <li>Sortable Table</li>
//             <li>Tip Calculator</li>
//             <li>To-Do List</li>
//             <li>Unit Converter</li>
//           </ul>

//           <button className="add-card-btn btn">Add a card</button>
//         </div>

//         <button className="add-list-btn btn">Add a list</button>
//       </section>
//     </>
//   );
// }
import React,{useState} from "react";
import {
  Button,
  Form,
  Input,
  Layout,
  Row,
  Col,
  message,
  Upload,
  Image
} from "antd";
import {  LoadingOutlined,PlusCircleOutlined, PlusOutlined, ReadFilled } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
function getBase64(Url, callback) {
  const reader = new FileReader()
  reader.addEventListener("load", callback(reader.result))
  reader.readAsDataURL(Url)
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Chỉ được sử dụng định dạng ảnh là jpeg và png");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Dung lượng ảnh phải nhỏ hơn 2M");
  }
  return isJpgOrPng && isLt2M;
}
function App() {
  const [loading, setLoading] = useState(false)
  const [imageUrl,setImageUrl] = useState()
  const handleChange = (info) => {
    console.log(info)
    if (info.file.status === "uploading") {
      setLoading(true)
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (Url) => {
        setLoading(false);
        setImageUrl(Url);
      })
    }
  }
  const uploadButton = (
    <div>{loading ? <LoadingOutlined /> : <PlusOutlined />}</div>
  ); 
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  var [form] = Form.useForm()
  const nameValue = Form.useWatch('username',form)
  function onFinish(values) {
    console.log(values)
  }
  function onFailed({values, errorFields,outOfdate}) {
    console.log(errorFields);
  }
  // var resultEncode = '';
  // var resultDecode = '';
  // function encode(textString,n) {
  //   for (let i = 0; i < textString.length; ++i) {
  //     const textCharCode = textString.charCodeAt(i);
  //     console.log("test" + textCharCode);
  //     // const customCharCode = textCharCode + n;
  //     // const stringCode = String.fromCharCode(customCharCode);
  //     // resultEncode += stringCode;
  //   }
  //   return resultEncode;
  // }
  // var n = Math.round(Math.random() * 1000);
  // encode("A", n);
  // console.log("Day ma hoa: " + resultEncode);
  // function decode(resultEncode,n) {
  //   for (let i = 0; i < resultEncode.length; ++i) {
  //     const textCharCode2 = resultEncode.charCodeAt(i)
  //     const reCharCode = textCharCode2 - n;
  //     const stringCode2 = String.fromCharCode(reCharCode);
  //     resultDecode += stringCode2
  //   }
  // }
  // decode(resultEncode, n)
  // console.log("Day giai ma hoa: " + resultDecode);

  return (
    <>
      {/* <Layout>
        <Sider style={siderStyle}>
          Sider{" "}
          <Button icon={<PlusCircleOutlined style={{frontSize: "20px", color: "red"}} />} disabled={false} type="primary">
            Click{" "}
          </Button>
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                Khoi A
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                Khoi B
              </Col>
            </Row>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout> */}
      <h1>{nameValue}</h1>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        onFinish={onFinish}
        onFinishFailed={onFailed}
        initialValues={{
          username: "abc@gmail.com",
          password: "@Aduc1234",
          repassword: "@Aduc1234",
        }}
      >
        <Form.Item
          label="Tai khoan"
          name="username"
          rules={[
            { required: true, message: "Ban phai nhap gia tri" },
            { min: 0, message: "Ban phai nhap it nhat la 10 ky" },
            {
              pattern: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/g,
              message: "Phai la email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mat khau"
          name="password"
          rules={[
            {
              validator(_, value) {
                if (value.includes("A")) {
                  return Promise.resolve("Hop le");
                } else {
                  return Promise.reject("Phai chua A");
                }
              },
            },
            {
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/g,
              message:
                "Tối thiểu 6 ký tự, ít nhất một chữ cái tiếng Anh viết hoa, một chữ cái tiếng Anh viết thường, một số và một ký tự đặc biệt",
            },
            { required: true, message: "Ban phai nhap gia tri" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhap lai Mat khau"
          name="repassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Ban phai nhap gia tri" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu mới mà bạn đã nhập không khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            <PlusCircleOutlined />
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Upload
            name="avtar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={true}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: `100%` }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
      </Form>
      <button
        onClick={() => {
          form.setFieldsValue({
            username: "trongducstvn@gmail.com",
            password: "!Aduc123",
            repassword: "!Aduc124",
          });
        }}
      >
        Fill Form
      </button>
    </>
  );
}
export default App;
