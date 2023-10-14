'use client'
import Site from '@/template/Site'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import SignIn from './signin';
import SignUp from './signup'

export default function Login() {

    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Site>
            <div className="flex justify-center">
                <div className="w-2/4 max-w-md min-w-[320px] border">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Login" className="w-1/2" value="1" />
                                <Tab label="Signup" className="w-1/2" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel className="flex flex-col gap-y-6" value="1"><SignIn /></TabPanel>
                        <TabPanel className="flex flex-col gap-y-6" value="2"><SignUp /></TabPanel>
                    </TabContext>
                </div>
            </div >
        </Site>
    )
}