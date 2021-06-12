import React from 'react';

export function createNavigation(strings: String[]) {
    for (let i = 0; i < strings.length; i++) {
        const text = strings[i];
        if (!text.includes("(") && !text.includes(")")) {
            strings[i] = text + "()";
        }
    }
    return strings
}
