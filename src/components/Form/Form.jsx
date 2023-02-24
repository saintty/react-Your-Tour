import React from "react";
import Section from "../../UI/section/Section";
import Select from "../../UI/select/Select";

import styles from "./Form.module.scss";
import { options } from "./selectOptions";

const Form = () => {
  return (
    <Section
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка,а также рамки и место обучения кадров"
    >
      <Select
        id="destination"
        label="Направление"
        required={true}
        options={options}
      />
    </Section>
  );
};

export default Form;
