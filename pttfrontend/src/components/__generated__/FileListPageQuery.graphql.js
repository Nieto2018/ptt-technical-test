/**
 * @flow
 * @relayHash e072745152c8751884421b88ae0e3a74
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FileListPageQueryVariables = {||};
export type FileListPageQueryResponse = {|
  +filesByUser: ?$ReadOnlyArray<?{|
    +name: string,
    +path: string,
    +fileVersion: {|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +version: number
        |}
      |}>
    |},
  |}>
|};
export type FileListPageQuery = {|
  variables: FileListPageQueryVariables,
  response: FileListPageQueryResponse,
|};
*/


/*
query FileListPageQuery {
  filesByUser {
    name
    path
    fileVersion {
      edges {
        node {
          version
          id
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "path",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "version",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FileListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filesByUser",
        "storageKey": null,
        "args": null,
        "concreteType": "FileType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileVersion",
            "storageKey": null,
            "args": null,
            "concreteType": "FileVersionNodeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "FileVersionNodeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FileVersionNode",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FileListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "filesByUser",
        "storageKey": null,
        "args": null,
        "concreteType": "FileType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fileVersion",
            "storageKey": null,
            "args": null,
            "concreteType": "FileVersionNodeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "FileVersionNodeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FileVersionNode",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FileListPageQuery",
    "id": null,
    "text": "query FileListPageQuery {\n  filesByUser {\n    name\n    path\n    fileVersion {\n      edges {\n        node {\n          version\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '60e306ebff891ef55cf9a1fa2588a3e6';
module.exports = node;
