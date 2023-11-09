import React from 'react';
import './SectionTitle.css'

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
    return <h1>{props.title}</h1>
}