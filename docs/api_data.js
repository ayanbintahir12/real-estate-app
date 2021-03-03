define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "/home/test/Desktop/Real State Project/docs/main.js",
    "groupTitle": "/home/test/Desktop/Real State Project/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/places/create",
    "title": "Add Place",
    "name": "AddPlace",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Place name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Place description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Place image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"place_name\":\"Johar Town\",\n \"place_email\":\"ayan1@gmailcom\",\n \"place_description\":\"Place Explaination\"\n \"place_image\":\"ayan.png\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>Place id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_name",
            "description": "<p>Place Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_number",
            "description": "<p>Place Contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_image",
            "description": "<p>Place Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"status\":\"success\",\n  \"message\":\"Created!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Place"
  },
  {
    "type": "delete",
    "url": "/places/:id",
    "title": "Delete Place",
    "name": "DeletePlace",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Place id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\":\"success\",\n  \"message\":\"Deleted!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotFound",
            "description": "<p>The id of the Place was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 404 Not Found\n{\n error:\"Place with id not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Place"
  },
  {
    "type": "get",
    "url": "/places/:id",
    "title": "Get Place",
    "name": "GetPlace",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Place id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>Place Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_name",
            "description": "<p>Place Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_number",
            "description": "<p>Place Contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_description",
            "description": "<p>Place Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_image",
            "description": "<p>Place Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\":\"success\",\n \"message\":\"Places retrieved!\"\n {\n   \"place_id\":2,\n   \"place_name\":\"10\",\n   \"place_number\":\"03341568877\",\n   \"place_image\":\"ayan.png\",\n   \"place_description\":\"No. of bed rooms, surround and etc.\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotFound",
            "description": "<p>The id of the Place was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 404 Not Found\n{\n error:\"Place with id not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Place"
  },
  {
    "type": "put",
    "url": "/places/:id",
    "title": "Put Place",
    "name": "UpdatePlace",
    "group": "Place",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Place id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>Place Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_name",
            "description": "<p>Place Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_number",
            "description": "<p>Place Contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_description",
            "description": "<p>Place Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "place_image",
            "description": "<p>Place Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"place_id\":2,\n  \"place_name\":\"10\",\n  \"place_number\":\"03341568877\",\n  \"place_image\":\"ayan.png\",\n  \"place_description\":\"No. of bed rooms, surround and etc.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotFound",
            "description": "<p>The id of the Place was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 404 Not Found\n{\n error:\"Place with id not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Place"
  },
  {
    "type": "get",
    "url": "/places",
    "title": "Get Places Information",
    "name": "GetPlaces",
    "group": "Places",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "places",
            "description": "<p>array of places object belonging to Place</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Data not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\nHTTP/1.1 404 Not Found\n{\n error:\"Place with id not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Places"
  },
  {
    "type": "post",
    "url": "/Signup",
    "title": "User",
    "name": "Signup_User",
    "group": "Signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_number",
            "description": "<p>Number of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Name of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n {\n     user_name:\"Ayan Bin Tahir\",\n     user_email:\"ayan@gmail.com\n }\n  \"status\":\"success\",\n  \"message\":\"Deleted!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotFound",
            "description": "<p>The id of the Place was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 404 Not Found\n{\n error:\"Place with id not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/index.js",
    "groupTitle": "Signup"
  }
] });
