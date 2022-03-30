import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FluidRelayServers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FluidRelayManagementClient } from "../fluidRelayManagementClient";
import {
  FluidRelayServer,
  FluidRelayServersListBySubscriptionNextOptionalParams,
  FluidRelayServersListBySubscriptionOptionalParams,
  FluidRelayServersListByResourceGroupNextOptionalParams,
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
  FluidRelayServersGetKeysResponse,
  FluidRelayServersListBySubscriptionResponse,
  FluidRelayServersListByResourceGroupResponse,
  FluidRelayServersListBySubscriptionNextResponse,
  FluidRelayServersListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FluidRelayServers operations. */
export class FluidRelayServersImpl implements FluidRelayServers {
  private readonly client: FluidRelayManagementClient;

  /**
   * Initialize a new instance of the class FluidRelayServers class.
   * @param client Reference to the service client
   */
  constructor(client: FluidRelayManagementClient) {
    this.client = client;
  }

  /**
   * List all Fluid Relay servers in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: FluidRelayServersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<FluidRelayServer> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: FluidRelayServersListBySubscriptionOptionalParams
  ): AsyncIterableIterator<FluidRelayServer[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: FluidRelayServersListBySubscriptionOptionalParams
  ): AsyncIterableIterator<FluidRelayServer> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all Fluid Relay servers in a resource group.
   * @param resourceGroup The resource group containing the resource.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroup: string,
    options?: FluidRelayServersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<FluidRelayServer> {
    const iter = this.listByResourceGroupPagingAll(resourceGroup, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroup, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroup: string,
    options?: FluidRelayServersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<FluidRelayServer[]> {
    let result = await this._listByResourceGroup(resourceGroup, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroup,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroup: string,
    options?: FluidRelayServersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<FluidRelayServer> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroup,
      options
    )) {
      yield* page;
    }
  }

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
  ): Promise<FluidRelayServersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, name, options },
      getOperationSpec
    );
  }

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
  ): Promise<FluidRelayServersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, name, resource, options },
      createOrUpdateOperationSpec
    );
  }

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
  ): Promise<FluidRelayServersUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, name, resource, options },
      updateOperationSpec
    );
  }

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
  ): Promise<FluidRelayServersDeleteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, name, options },
      deleteOperationSpec
    );
  }

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
  ): Promise<FluidRelayServersRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, name, parameters, options },
      regenerateKeyOperationSpec
    );
  }

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
  ): Promise<FluidRelayServersGetKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, name, options },
      getKeysOperationSpec
    );
  }

  /**
   * List all Fluid Relay servers in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: FluidRelayServersListBySubscriptionOptionalParams
  ): Promise<FluidRelayServersListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * List all Fluid Relay servers in a resource group.
   * @param resourceGroup The resource group containing the resource.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroup: string,
    options?: FluidRelayServersListByResourceGroupOptionalParams
  ): Promise<FluidRelayServersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: FluidRelayServersListBySubscriptionNextOptionalParams
  ): Promise<FluidRelayServersListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroup The resource group containing the resource.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroup: string,
    nextLink: string,
    options?: FluidRelayServersListByResourceGroupNextOptionalParams
  ): Promise<FluidRelayServersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroup, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServer,
      headersMapper: Mappers.FluidRelayServersCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServer,
      headersMapper: Mappers.FluidRelayServersUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.FluidRelayServersDeleteHeaders
    },
    204: {
      headersMapper: Mappers.FluidRelayServersDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{name}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServerKeys,
      headersMapper: Mappers.FluidRelayServersRegenerateKeyHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.name
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{name}/getKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServerKeys,
      headersMapper: Mappers.FluidRelayServersGetKeysHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.FluidRelay/fluidRelayServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServerList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServerList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroup
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServerList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FluidRelayServerList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroup
  ],
  headerParameters: [Parameters.accept],
  serializer
};
