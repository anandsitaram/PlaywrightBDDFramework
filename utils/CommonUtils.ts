import { DataTable } from "playwright-bdd";
import { RandomUtils } from "@utils/RandomUtils";




export function  refineData(data:{ [key:string]:string }):{ [key:string]:string }{
    const updatedData: { [key: string]: string } = {};

    for (const key in data) {
        let value = data[key];
        if (value.startsWith("[") && value.endsWith("]")) {
            value = getEnhancedValue(value.slice(1, -1)); // Remove brackets and process
        }
        updatedData[key] = value;
    }

    return updatedData;
}

function getEnhancedValue(value: string): string {
    const dynamicValues: { [key: string]: () => string } = {
        DynamicEmail: () => `Automation_${RandomUtils.getRandomCamelCaseString(4)}@test.com`,
        DynamicFirstName: () => `Automation_${RandomUtils.getRandomCamelCaseString(4)}`,
        DynamicLastName: () => `Automation_${RandomUtils.getRandomCamelCaseString(4)}`,
    };

    return dynamicValues[value] ? dynamicValues[value]() : value;
}


