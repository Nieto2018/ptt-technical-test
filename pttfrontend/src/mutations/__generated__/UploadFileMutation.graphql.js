/**
 * @flow
 * @relayHash 8e884d7dfdcf0e471b25ae15f67505cc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UploadFileMutationVariables = {|
  path: string
|};
export type UploadFileMutationResponse = {|
  +uploadFile: ?{|
    +result: ?string
  |}
|};
export type UploadFileMutation = {|
  variables: UploadFileMutationVariables,
  response: UploadFileMutationResponse,
|};
*/


/*
mutation UploadFileMutation(
  $path: String!
) {
  uploadFile(path: $path) {
    result
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "path",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "uploadFile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "path",
        "variableName": "path"
      }
    ],
    "concreteType": "UploadFile",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "result",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UploadFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UploadFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UploadFileMutation",
    "id": null,
    "text": "mutation UploadFileMutation(\n  $path: String!\n) {\n  uploadFile(path: $path) {\n    result\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0d5eb85a7ef1491f305ef08f01ce1aa';
module.exports = node;
