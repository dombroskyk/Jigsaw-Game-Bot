import { ValidationResponse } from "../types/validationResponse";

export async function validateGameInputs(name: string, lowerPlayerBound: number | null, upperPlayerBound: number | null): Promise<ValidationResponse> {
    let errorMessages: string[] = [];
    const response: ValidationResponse = { success: true, errorMessage: "" };

    if (!name) {
        errorMessages.push("Name is required");
    }

    if (lowerPlayerBound == null) {
        errorMessages.push("Lower Player Bound is required.");
    } else if (isNaN(lowerPlayerBound)) {
        errorMessages.push("Lower Player Bound must be an integer.");
    }
    
    if (upperPlayerBound != null && isNaN(upperPlayerBound)) {
        errorMessages.push("Upper Player Bound must be an integer if it is provided.");
    }

    if (errorMessages.length > 0) {
        response.errorMessage = errorMessages.join("\r\n");
        response.success = false;
    }

    return response;
}