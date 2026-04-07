/* eslint-disable no-restricted-syntax */
import { startCase } from 'lodash';

const generateLine = (key: string, value: string) => {
  return `<p style="margin:10px;padding:0px">${startCase(key)} : ${value}</p>`;
};

const generateHTML = (
  formName: string,
  formValues: any,
  bulletiens: string[]
) => {
  let template = `<h1>${formName}</h1>`;

  for (const [key, value] of Object.entries(formValues)) {
    if (bulletiens.includes(key)) {
      template += `<p style="font-weight:bold">${startCase(key)}</p>`;
      template += `<ul>`;

      const subObj = formValues[key];
      for (const [chKey, chValue] of Object.entries(subObj)) {
        if (subObj[chKey]) {
          template += `<li>${startCase(chKey)}</li>`;
        }
      }
      template += `</ul>`;
    } else {
      template += generateLine(key, value);
    }
  }
  return template;
};

export default generateHTML;
