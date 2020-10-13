import { renderHook } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "../../hooks/auth";

import MockAdapter from "axios-mock-adapter";
import api from "../../services/api";

const apiMock = new MockAdapter(api);


describe("Auth hooke", () => {
    it("should be able to signIn", async () => {
        const apiResponse = {
            user: {
                id: "user123",
                name: "Jhon Doe",
                email: "johndoe@example.com.br",
            },
            token: "token-123",
        };

        apiMock.onPost("sessions").reply(200, apiResponse);

        const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

        const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
            wrapper: AuthProvider,
        });

        result.current.signIn({
            email: "johndoe@example.com.br",
            password: "123456",
        });

        await waitForNextUpdate();

        expect(setItemSpy).toHaveBeenCalledWith("@GoBarber:token", apiResponse.token);
        expect(setItemSpy).toHaveBeenCalledWith("@GoBarber:user", JSON.stringify(apiResponse.user));

        expect(result.current.user.email).toEqual("johndoe@example.com.br");
    });
});