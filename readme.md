# Edgescan Interview Programming Exercise

## What do I need to do?

This folder contains a collection of tests, and a class with 3 blank methods. Your goal is to implement these methods such that all of the tests pass.

There's no hard time limit for the exercise, if you need longer than a week just ping us to let us know you're still working on it.

## Why a programming exercise?

We don't believe in high-pressured interview processes where you have to whiteboard how to reverse a doubly-linked list in front of an audience. We'd prefer to evaluate you based on the thing we want to hire you for: how well can you understand and solve a problem, and will your future team mates be able to follow what you've done.

## What will the Reviewer look for?

First and foremost your solution must satisfy the following:

- All of the tests must pass
- The solution must be a general solution to the problem, it cannot be hard-coded to the specific test cases we've provided

Other than the above our focus is on the clarity and readability of your code. As mentioned in the previous section this is critical for the maintainability of a codebase.

## Ok I'm ready, Give me the Details!

This exercise is based on a real problem we encountered while building edgescan. We have a collection of permissions that can be granted to users: view, edit, delete etc. and there are dependencies between these. For example: to grant the edit permission to a user they must already have the view permission. This challenge represents this situation with the following object:

```
{
  "view" => [],
  "edit" => ["view"]
}
```

The view permission has no dependencies (represented by an empty array), and the edit permission depends on the view permission. Note that permissions may have multiple dependencies.

The class you've been provided takes a single object like the one above in its constructor, and has three methods waiting to be implemented. Those methods are described below.

_NB all permissions are represented as lowercase strings i.e. view is represented by 'view'_

### `canGrant?(existing, permToBeGranted)`

This function checks if a permission can be granted given a users existing permissions.

It accepts the following parameters:

- `existing` - an array of permissions already granted
- `permToBeGranted` - the permission to be granted

The method should return true if the permission can be granted and false if not.

### `canDeny?(existing, permToBeDenied)`

This function checks if a permission can be removed, and still satisfy all dependencies of the other permissions. For example if a user has view and edit permissions, it should not be possible to remove view since edit depends on it.

It accepts the following parameters:

- `existing` - an array of permissions already granted
- `permToBeDenied` - the permission to be denied

The method should return true if the permission can be denied and false if not.

### `sort(permissions)`

This function sorts a list of permissions into the order they should be granted to have the best chance of satisfying dependencies. For example, if we sort view and edit permissions, view must come before edit, since edit depends on view already being granted.

It acceps a single parameter `permissions` - an array of permissions to sort.

The method should return the array of permissions sorted in dependency order.

## Good Luck!
