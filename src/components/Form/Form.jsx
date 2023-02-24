import React from "react";
import Section from "../../UI/section/Section";
import InputRow from "./InputRow/InputRow";
import InputField from "./Field/Field";
import Input from "../../UI/input/Input";
import Select from "../../UI/select/Select";
import Radio from "../../UI/radio/Radio";
import Checkbox from "../../UI/checkbox/Checkbox";
import FromButton from "../../UI/formButton/FormButton";

import styles from "./Form.module.scss";

const Form = () => {
  return (
    <Section
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка,а также рамки и место обучения кадров"
    >
      <form className={styles.form}></form>
    </Section>
  );
};

export default Form;
