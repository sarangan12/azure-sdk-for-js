import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationResult,
  FluidRelayOperationsListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FluidRelayOperations. */
export interface FluidRelayOperations {
  /**
   * List all operations provided by Microsoft.FluidRelay.
   * @param options The options parameters.
   */
  list(
    options?: FluidRelayOperationsListOptionalParams
  ): PagedAsyncIterableIterator<OperationResult>;
}
