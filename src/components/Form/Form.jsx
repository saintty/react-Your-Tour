import React from "react";
import Section from "../../UI/section/Section";
import InputRow from "./InputRow/InputRow";
import InputField from "./Field/Field";
import Select from "../../UI/select/Select";
import Textarea from "../../UI/textarea/Textarea";
import Radio from "../../UI/radio/Radio";
import Checkbox from "../../UI/checkbox/Checkbox";
import FromButton from "../../UI/formButton/FormButton";
import ButtonRow from "./ButtonRow/ButtonRow";

import styles from "./Form.module.scss";
import { options } from "./selectOptions";
import Label from "../../UI/label/Label";

const Form = () => {
  return (
    <Section
      id="build-tour"
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка,а также рамки и место обучения кадров"
    >
      <form className={styles.form}>
        <InputRow>
          <InputField
            input={{
              id: "name",
              type: "text",
              label: "Имя",
              placeholder: "Введите ваше имя",
              required: true,
            }}
          />
          <InputField>
            <Select
              id="destination"
              label="Направление"
              options={options}
              required
            />
          </InputField>
        </InputRow>
        <InputRow>
          <InputField
            input={{
              id: "email",
              type: "email",
              label: "Email",
              placeholder: "example@mail.com",
              required: true,
            }}
          />
          <InputField
            input={{
              id: "tel",
              type: "tel",
              label: "Телефон",
              placeholder: "+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _",
              required: true,
            }}
          />
        </InputRow>
        <InputRow>
          <InputField
            input={{
              id: "date-from",
              type: "date",
              label: "Дата от",
              placeholder: "ДД.ММ.ГГГГ",
              required: true,
            }}
          />
          <InputField
            input={{
              id: "date-to",
              type: "date",
              label: "Дата до",
              placeholder: "ДД.ММ.ГГГГ",
              required: true,
            }}
          />
        </InputRow>
        <Textarea
          textarea={{
            id: "comment",
            label: "Комментарий",
            placeholder: "Оставьте ваш комментарий",
          }}
        />
        <InputRow long={true}>
          <Label label="Вам есть 18?" htmlFor="age" long={true} />
          <Radio
            radio={{
              id: "age-confirm",
              label: "Да",
              name: "age",
              value: 1,
            }}
          />
          <Radio
            radio={{
              id: "age-deny",
              label: "Нет",
              name: "age",
              value: 0,
            }}
          />
        </InputRow>
        <Checkbox id="license" label="Нажимая на кнопку я принимаю условия ">
          <a className={styles.license} href="#">
            Лицензионного договора
          </a>
        </Checkbox>
        <ButtonRow>
          <FromButton label="Найти тур" type="submit" />
          <FromButton label="Сбросить" type="reset" />
        </ButtonRow>
      </form>
    </Section>
  );
};

export default Form;
