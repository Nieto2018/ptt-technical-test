/**
 * @flow
 * @relayHash 9b4adff2721ba5f075568cf9312b6aef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +filesByUser: ?$ReadOnlyArray<?{|
    +name: string,
    +path: string,
    +fileRevision: {|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +revision: number
        |}
      |}>
    |},
  |}>
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery {
  filesByUser {
    name
    path
    fileRevision {
      edges {
        node {
          revision
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
  "name": "revision",
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
    "name": "HomeQuery",
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
            "name": "fileRevision",
            "storageKey": null,
            "args": null,
            "concreteType": "FileRevisionNodeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "FileRevisionNodeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FileRevisionNode",
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
    "name": "HomeQuery",
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
            "name": "fileRevision",
            "storageKey": null,
            "args": null,
            "concreteType": "FileRevisionNodeConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "FileRevisionNodeEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FileRevisionNode",
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
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  filesByUser {\n    name\n    path\n    fileRevision {\n      edges {\n        node {\n          revision\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '383a86b5e36a32f7e0d63a2304ea8794';
module.exports = node;
