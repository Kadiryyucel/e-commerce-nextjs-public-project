'use client'

import { Button, Checkbox, InputAdornment, TextField } from "@mui/material";


export default function LoginPage() {


    return (
        <>
                            <TextField
                                className="w-full"
                                id="outlined-number"
                                label="Email Address"
                                type="text"
                                placeholder="Email Address"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.8333 0.833008H4.16667C3.062 0.834331 2.00296 1.27374 1.22185 2.05486C0.440735 2.83597 0.00132321 3.89501 0 4.99967L0 14.9997C0.00132321 16.1043 0.440735 17.1634 1.22185 17.9445C2.00296 18.7256 3.062 19.165 4.16667 19.1663H15.8333C16.938 19.165 17.997 18.7256 18.7782 17.9445C19.5593 17.1634 19.9987 16.1043 20 14.9997V4.99967C19.9987 3.89501 19.5593 2.83597 18.7782 2.05486C17.997 1.27374 16.938 0.834331 15.8333 0.833008ZM4.16667 2.49967H15.8333C16.3323 2.50066 16.8196 2.65094 17.2325 2.93118C17.6453 3.21142 17.9649 3.6088 18.15 4.07217L11.7683 10.4547C11.2987 10.9224 10.6628 11.1851 10 11.1851C9.33715 11.1851 8.70131 10.9224 8.23167 10.4547L1.85 4.07217C2.03512 3.6088 2.35468 3.21142 2.76754 2.93118C3.1804 2.65094 3.66768 2.50066 4.16667 2.49967ZM15.8333 17.4997H4.16667C3.50363 17.4997 2.86774 17.2363 2.3989 16.7674C1.93006 16.2986 1.66667 15.6627 1.66667 14.9997V6.24967L7.05333 11.633C7.83552 12.4132 8.89521 12.8514 10 12.8514C11.1048 12.8514 12.1645 12.4132 12.9467 11.633L18.3333 6.24967V14.9997C18.3333 15.6627 18.0699 16.2986 17.6011 16.7674C17.1323 17.2363 16.4964 17.4997 15.8333 17.4997Z"
                                                fill="#979AB8" />
                                        </svg>
                                    </InputAdornment>,
                                }} />

                            <TextField
                                className="w-full"
                                id="outlined-number"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.8333 0.833008H4.16667C3.062 0.834331 2.00296 1.27374 1.22185 2.05486C0.440735 2.83597 0.00132321 3.89501 0 4.99967L0 14.9997C0.00132321 16.1043 0.440735 17.1634 1.22185 17.9445C2.00296 18.7256 3.062 19.165 4.16667 19.1663H15.8333C16.938 19.165 17.997 18.7256 18.7782 17.9445C19.5593 17.1634 19.9987 16.1043 20 14.9997V4.99967C19.9987 3.89501 19.5593 2.83597 18.7782 2.05486C17.997 1.27374 16.938 0.834331 15.8333 0.833008ZM4.16667 2.49967H15.8333C16.3323 2.50066 16.8196 2.65094 17.2325 2.93118C17.6453 3.21142 17.9649 3.6088 18.15 4.07217L11.7683 10.4547C11.2987 10.9224 10.6628 11.1851 10 11.1851C9.33715 11.1851 8.70131 10.9224 8.23167 10.4547L1.85 4.07217C2.03512 3.6088 2.35468 3.21142 2.76754 2.93118C3.1804 2.65094 3.66768 2.50066 4.16667 2.49967ZM15.8333 17.4997H4.16667C3.50363 17.4997 2.86774 17.2363 2.3989 16.7674C1.93006 16.2986 1.66667 15.6627 1.66667 14.9997V6.24967L7.05333 11.633C7.83552 12.4132 8.89521 12.8514 10 12.8514C11.1048 12.8514 12.1645 12.4132 12.9467 11.633L18.3333 6.24967V14.9997C18.3333 15.6627 18.0699 16.2986 17.6011 16.7674C17.1323 17.2363 16.4964 17.4997 15.8333 17.4997Z"
                                                fill="#979AB8" />
                                        </svg>
                                    </InputAdornment>,
                                }} />

                            <div>
                                <span>{"Cinsiyet (Opsiyonel)"}</span>
                                <div className="flex">
                                    <Button className="w-1/2" variant="contained">Woman</Button>
                                    <Button className="w-1/2" variant="contained">Man</Button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 text-xs">
                                <div className="flex items-start">
                                    <Checkbox 
                                        className="pt-0"
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <span>Kapanyadan haberdar olabilmen için kişisel veirlermin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul ediyorum.
                                    </span>
                                </div>

                                <div className="flex">
                                    <Checkbox
                                        className="pt-0"
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <span>Kişisel verilerimin işlenmesine yönelik aydınlatma metnini okudum ve anladım.</span>
                                </div>
                            </div>


                            <Button variant="contained" className="w-full">Üye Ol</Button>
        </>)
}