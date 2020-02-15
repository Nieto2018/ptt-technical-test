/**
 * @flow
 * @relayHash eead1d144beafd149d0414696f0fe0d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LastRevisionByFileQueryVariables = {|
  fullPath: string
|};
export type LastRevisionByFileQueryResponse = {|
  +lastRevisionByFile: ?number
|};
export type LastRevisionByFileQuery = {|
  variables: LastRevisionByFileQueryVariables,
  response: LastRevisionByFileQueryResponse,
|};
*/


/*
query LastRevisionByFileQuery(
  $fullPath: String!
) {
  lastRevisionByFile(fullPath: $fullPath)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "fullPath",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "lastRevisionByFile",
    "args": [
      {
        "kind": "Variable",
        "name": "fullPath",
        "variableName": "fullPath"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LastRevisionByFileQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LastRevisionByFileQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LastRevisionByFileQuery",
    "id": null,
    "text": "query LastRevisionByFileQuery(\n  $fullPath: String!\n) {\n  lastRevisionByFile(fullPath: $fullPath)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '82c7bc1c931cb14de4bc9d0ea6bb075e';
module.exports = node;
