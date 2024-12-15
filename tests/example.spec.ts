import { describe, it, expect, vi } from "vitest";
import { hola } from "../src/index";

describe("example function", () => {
  it("should log the correct messages", () => {
    // Espiamos (mock) la función console.log
    const logSpy = vi.spyOn(console, "log");

    // Ejecutamos la función
    hola();

    // Comprobamos que se haya llamado con el mensaje esperado
    expect(logSpy).toHaveBeenCalledWith("Hola mundo!");

    // Restauramos el comportamiento original de console.log
    logSpy.mockRestore();
  });
});
