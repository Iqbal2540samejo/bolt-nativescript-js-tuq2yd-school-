import { Frame } from '@nativescript/core';

export function navigate(moduleName, context = {}) {
  Frame.topmost().navigate({
    moduleName: moduleName,
    context: context
  });
}