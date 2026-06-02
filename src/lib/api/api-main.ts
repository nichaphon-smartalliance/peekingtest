import type { ApiResponse, PageObject } from "@/types/api/main/common";
import { mainClient } from "./client";

// Add typed endpoint functions here as features are built.
// Example:
// export const getExampleListApi = (params?: Record<string, unknown>) =>
//   mainClient.get<ApiResponse<PageObject<ExampleResponse>>>("/api/v1/example", { params });

export { mainClient };
export type { ApiResponse, PageObject };
