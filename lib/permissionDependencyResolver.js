var tsort = require("tsort"); // HINT!!! This is a useful package for one of the methods

class PermissionDependencyResolver {
  constructor(dependencies) {
    this.dependencies = dependencies;
  }

  canGrant(existing, permToBeGranted) {
    // Error test to check if children from 'existing' items are also in 'existing'
    for (let permission of existing){
      for (let child of this.dependencies[permission]) {
        if (!existing.includes(child)){
          throw new InvalidBasePermissionsError;
        }
      }
    }
    // check if all children of 'permToBeGranted' are in 'existing'
    for (let dependency of this.dependencies[permToBeGranted]){
      if (!existing.includes(dependency)){
        return false;
      }
    }
    return true;
  }

  canDeny(existing, permToBeDenied) {
    for (let permission of existing){
      // Error check that the children are in 'existing' array
      for (let child of this.dependencies[permission]) {
        if (!existing.includes(child)){
          throw new InvalidBasePermissionsError;
        }
      }
      // Check if the item to be deleted is depended on by any item in 'existing'
      if (this.dependencies[permission].includes(permToBeDenied)){
        return false;
      }
    }
    // 'permToBeDenied' is not a child of any item in 'existing'
    return true;
  }

  sort(permissions) {
    let graph = tsort();

    var sortable = [];
    // Add dependencies to graph
    for (var permission of permissions){
      graph.add(permission, ...this.dependencies[permission]);
    }
    sortable = graph.sort();

    var result = [];

    for (var item of sortable){
      result.push(item);
    }

    result.reverse();

    return result;
  }
}

// you'll need to throw this in canGrant and canDeny when the existing permissions are invalid
class InvalidBasePermissionsError extends Error {
  constructor(_message) {
    super("Invalid Base Permissions");
    this.name = "InvalidBasePermissionsError";
  }
}



module.exports = PermissionDependencyResolver;
