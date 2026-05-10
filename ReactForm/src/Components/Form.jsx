import { CustomForm } from './CustomForm'

export const Form = () => {

    const style = { display: "flex", alignItems: "start", flexDirection: "column", gap: "10px", width: "30%", margin: "auto" }

    const dataForm = [
        { id: "email", type: "email", placeholder: "enter your email", name: "email" },
        { id: "passwprd", type: "passwprd", placeholder: "enter your passwprd", name: "passwprd" },
        { id: "phone", type: "tel", placeholder: "enter your phone", name: "phone" },
        { id: "address", type: "textarea", placeholder: "enter your address", name: "address" },
        { id: "name", type: "text", placeholder: "enter your name", name: "name" },
    ]

    const showDataVal = (value) => {
        console.log('🚀 ~ value:', value);
    }

    return (
        <CustomForm style={style} data={dataForm} button={"signin"} func={showDataVal} />
    )
}
