import React from "react";
import Section from "../../UI/section";
import InputRow from "./InputRow";
import Field from "./Field";
import Select from "../../UI/select";
import Textarea from "../../UI/textarea";
import Radio from "../../UI/radio";
import Checkbox from "../../UI/checkbox";
import FromButton from "../../UI/formButton";
import ButtonRow from "./ButtonRow";
import Label from "../../UI/label";

import styles from "./Form.module.scss";
import { options } from "./selectOptions";

const Form = () => {
  return (
    <Section
      id="build-tour"
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка,а также рамки и место обучения кадров"
    >
      <form className={styles.form}>
        <InputRow>
          <Field
            input={{
              id: "name",
              type: "text",
              label: "Имя",
              placeholder: "Введите ваше имя",
              required: true,
            }}
          />
          <Field>
            <Select
              id="destination"
              label="Направление"
              options={options}
              required
            />
          </Field>
        </InputRow>
        <InputRow>
          <Field
            input={{
              id: "email",
              type: "email",
              label: "Email",
              placeholder: "example@mail.com",
              required: true,
            }}
          />
          <Field
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
          <Field
            input={{
              id: "date-from",
              type: "date",
              label: "Дата от",
              placeholder: "ДД.ММ.ГГГГ",
              required: true,
            }}
          />
          <Field
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
