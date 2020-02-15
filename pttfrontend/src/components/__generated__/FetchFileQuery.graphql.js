/**
 * @flow
 * @relayHash 63bb91b347d62308ac02b02a613887aa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FetchFileQueryVariables = {|
  fullPath: string,
  revision?: ?string,
|};
export type FetchFileQueryResponse = {|
  +downloadFile: ?string
|};
export type FetchFileQuery = {|
  variables: FetchFileQueryVariables,
  response: FetchFileQueryResponse,
|};
*/


/*
query FetchFileQuery(
  $fullPath: String!
  $revision: String
) {
  downloadFile(fullPath: $fullPath, revision: $revision)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "fullPath",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "revision",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "downloadFile",
    "args": [
      {
        "kind": "Variable",
        "name": "fullPath",
        "variableName": "fullPath"
      },
      {
        "kind": "Variable",
        "name": "revision",
        "variableName": "revision"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FetchFileQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "FetchFileQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "FetchFileQuery",
    "id": null,
    "text": "query FetchFileQuery(\n  $fullPath: String!\n  $revision: String\n) {\n  downloadFile(fullPath: $fullPath, revision: $revision)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c29f811f7a4f65bd06371cea32d6787';
module.exports = node;
