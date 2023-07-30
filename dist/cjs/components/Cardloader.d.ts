import * as React from 'react';
export interface CardContent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    firstName?: string;
    phone?: string;
    email?: string;
    state?: string;
    country?: string;
}
export declare const CardLoader: React.FunctionComponent<CardContent | any>;
