const rules = {
    isRequired: (value) => {
        return value?.length > 0 ? "" : "this field is required";
    },
    isEmail: (value) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value) ? "" : "this field must be an email";
    },
    isPassword: (value) => {
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return regex.test(value) ? "" : "password must contain at least 8 characters, an uppercase letter, a special character and a number";
    },
    confirmPassword: (pw) => {
        const passwordInput = document.getElementById("password");
        const currentPassword = passwordInput.value;
        return pw === currentPassword ? "" : "passwords do not match";
    }
}

const capitalize = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export const validate = () => {
    let flag = true;
    const inputs = document.getElementsByTagName("input");
    // console.log(inputs);
    for (const input of inputs) {
        // console.log(input);
        if (input.hasAttribute("data-rules")) {
            const inputRules = input.getAttribute("data-rules").split('/');
            // console.log(inputRules);
            const value = input.value;
            // console.log(value);
            let errorMsg = [];
            for (const rule of inputRules) {
                // console.log(rule, rules[rule]);
                if (rules[rule]) {
                    let msg;
                    msg = rules[rule](value);
                    if (msg) {
                        errorMsg.push(msg);
                    }
                }
            }
            // console.log(errorMsg);
            const msgContainer = input.nextElementSibling;
            if (errorMsg.length > 0) {
                const msgList = msgContainer.children[0];
                msgList.innerHTML = "";
                msgList.classList.add("msg-list");
                for (const error of errorMsg) {
                    const msgItem = document.createElement("li");
                    msgItem.classList.add("msg-item");
                    const msgText = `* ${capitalize(error)}`
                    msgItem.appendChild(document.createTextNode(msgText));
                    msgList.appendChild(msgItem);
                }
                errorMsg.pop();
                msgContainer.style.display = "block";
                input.classList.add("invalid");
            } else {
                msgContainer.style.display = "none";
                input.classList.remove("invalid");
            }

        }

    }
    for(const input of inputs) {
        flag = flag && !input.classList.contains("invalid");
    }
    return flag;
}