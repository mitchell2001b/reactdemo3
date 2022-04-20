import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { GetAllAccountsFromApi, GetAllEmployeeAccountsFromApi } from "../components/AccountGetAll";

test("GetAllAccountsEndResultIsNotUndefined", ()=> {
    expect(GetAllAccountsFromApi()).toBeDefined();
});

/*test("GetAllEmployeeAccounts", async ()=> {

    await expect(GetAllEmployeeAccountsFromApi())
    .rejects
    .toThrow("Network request failed");  
});*/

test("GetAllEmployeeAccountsEndResultIsNotUndefined", async ()=> {

    expect(GetAllEmployeeAccountsFromApi()).toBeDefined();
});


test("GetAllEmployeeAccountsEndResultIsNotNull", async ()=> {

    expect(GetAllEmployeeAccountsFromApi()).not.toBeNull();
});