import Statistics from '@/components/Statistics';
import React from 'react';
import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';
import Head from 'next/head';

function Corporate() {
    return (
        <div>
            {/* SEO Meta Tags */}
            <Head>
                <title>Corporate Services | Bharat Air Ambulance and Funeral Services</title>
                <meta
                    name="description"
                    content="Explore corporate services offered by Bharat Air Ambulance and Funeral Services. We provide professional, compassionate services to businesses and organizations."
                />
                <meta
                    name="keywords"
                    content="corporate services, funeral services, air ambulance, business services, professional services, emergency services"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Bharat Air Ambulance and Funeral Services" />
                <link rel="canonical" href="https://www.bhartiyanairambulanceservices.in/corporate" />
            </Head>

            {/* Coming Soon Section */}
            <ComingSoon />
        </div>
    );
}

export default Corporate;
