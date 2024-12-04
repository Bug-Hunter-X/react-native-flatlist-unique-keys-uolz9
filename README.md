# React Native FlatList Duplicate Keys Error

This repository demonstrates a common error in React Native's `FlatList` component: using duplicate or non-unique keys for list items.  This can lead to unexpected rendering behavior, performance issues, and difficult-to-debug errors.  The solution demonstrates how to correctly assign unique keys to items to resolve this issue.

## Problem

When using `FlatList`, each item must have a unique `key` prop. If multiple items have the same key, `FlatList` will not be able to correctly identify and update them, leading to rendering errors.

## Solution

Ensure each item in your data array has a unique key.  This is typically the item's ID from your data source.  If you don't have a unique ID, you can generate one using a library like `uuid`.