const numeric_color = "#202020";
const numeric_btn_color = "#E0E0E0";

const operator_color = "#FFFFFF";
const operator_btn_color = "#FF8000";

const symbole_color = "#290472";
const symbole_btn_color = "#E0E0E0";

const cancel_color = "#FFFFFF";
const cancel_btn_color = "#990000";

const equal_color = "#FFFFFF";
const equal_btn_color = "#290472";

const buttons = [
  [
    { value: "C", color: cancel_color, button: cancel_btn_color, type: "cancel", flex: 1 },
    { value: "±", color: symbole_color, button: symbole_btn_color, type: "signe", flex: 1 },
    { value: "%", color: operator_color, button: operator_btn_color, type: "operator", flex: 1 },
    { value: "÷", color: operator_color, button: operator_btn_color, type: "operator", flex: 1 },
  ],
  [
    { value: "7", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "8", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "9", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "×", color: operator_color, button: operator_btn_color, type: "operator", flex: 1 },
  ],
  [
    { value: "4", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "5", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "6", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "-", color: operator_color, button: operator_btn_color, type: "operator", flex: 1 },
  ],
  [
    { value: "1", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "2", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "3", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: "+", color: operator_color, button: operator_btn_color, type: "operator", flex: 1 },
  ],
  [
    { value: "√", color: operator_color, button: operator_btn_color, type: "sqrt", flex: 1 },
    { value: "∧", color: operator_color, button: operator_btn_color, type: "pow", flex: 1 },
    { value: "log", color: operator_color, button: operator_btn_color, type: "log", flex: 1 },
  ],
  [
    { value: "0", color: numeric_color, button: numeric_btn_color, type: "numeric", flex: 1 },
    { value: ".", color: symbole_color, button: symbole_btn_color, type: "point", flex: 1 },
    { value: "=", color: equal_color, button: equal_btn_color, type: "equal", flex: 2 },
  ],
];

function calcul(params) {}

export { buttons };
