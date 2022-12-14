import React, { useEffect, useState } from 'react';
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import { Topbar } from '@/Components'

export default function Landing({...props}) {
    return (
        <>
            <Head title="Landing" />
            <Topbar />
            <div className="content">
                This website is currently being made, hold a little more time :)
            </div>
        </>
    )
}