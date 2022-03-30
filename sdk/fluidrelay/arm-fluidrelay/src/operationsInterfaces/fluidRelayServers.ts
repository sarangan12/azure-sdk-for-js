import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FluidRelayServer,
  FluidRelayServersListBySubscriptionOptionalParams,
  FluidRelayServersListByResourceGroupOptionalParams,
  FluidRelayServersGetOptionalParams,
  FluidRelayServersGetResponse,
  FluidRelayServersCreateOrUpdateOptionalParams,
  FluidRelayServersCreateOrUpdateResponse,
  FluidRelayServerUpdate,
  FluidRelayServersUpdateOptionalParams,
  FluidRelayServersUpdateResponse,
  FluidRelayServersDeleteOptionalParams,
  FluidRelayServersDeleteResponse,
  RegenerateKeyRequest,
  FluidRelayServersRegenerateKeyOptionalParams,
  FluidRelayServersRegenerateKeyResponse,
  FluidRelayServersGetKeysOptionalParams,
  FluidRelayServersGetKeysResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FluidRelayServers. */
export interface FluidRelayServers {
  /**
   * List all Fluid Relay servers in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: FluidRelayServersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<FluidRelayServer>;
  /**
   * List all Fluid Relay servers in a resource group.
   * @param resourceGroup The resource group containing the resource.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroup: string,
    options?: FluidRelayServersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<FluidRelayServer>;
  /**
   * Get a Fluid Relay server.
   * @param resourceGroup The resource group containing the resource.
   * @param name The resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroup: string,
    name: string,
    options?: FluidRelayServersGetOptionalParams
  ): Promise<FluidRelayServersGetResponse>;
  /**
   * Create or Update a Fluid Relay server.
   * @param resourceGroup The resource group containing the resource.
   * @param name The resource name.
   * @param resource The details of the Fluid Relay server resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroup: string,
    name: string,
    resource: FluidRelayServer,
    options?: FluidRelayServersCreateOrUpdateOptionalParams
  ): Promise<FluidRelayServersCreateOrUpdateResponse>;
  /**
   * Update a Fluid Relay server.
   * @param resourceGroup The resource group containing the resource.
   * @param name The resource name.
   * @param resource The updatable details of the Fluid Relay server resource.
   * @param options The options parameters.
   */
  update(
    resourceGroup: string,
    name: string,
    resource: FluidRelayServerUpdate,
    options?: FluidRelayServersUpdateOptionalParams
  ): Promise<FluidRelayServersUpdateResponse>;
  /**
   * Delete a Fluid Relay server.
   * @param resourceGroup The resource group containing the resource.
   * @param name The resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroup: string,
    name: string,
    options?: FluidRelayServersDeleteOptionalParams
  ): Promise<FluidRelayServersDeleteResponse>;
  /**
   * Regenerate the primary or secondary key for this server.
   * @param resourceGroup The resource group containing the resource.
   * @param name The resource name.
   * @param parameters The details of which keys to generate.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroup: string,
    name: string,
    parameters: RegenerateKeyRequest,
    options?: FluidRelayServersRegenerateKeyOptionalParams
  ): Promise<FluidRelayServersRegenerateKeyResponse>;
  /**
   * Regenerate the primary or secondary key for this server.
   * @param resourceGroup The resource group containing the resource.
   * @param name The resource name.
   * @param options The options parameters.
   */
  getKeys(
    resourceGroup: string,
    name: string,
    options?: FluidRelayServersGetKeysOptionalParams
  ): Promise<FluidRelayServersGetKeysResponse>;
}
