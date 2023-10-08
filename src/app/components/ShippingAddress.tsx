import { InputAdornment, TextField } from "@mui/material";
import ShippingMethod from "./ShippingMethod";
import CreditCardInfo from "./CreditCardInfo";

export default function ShippingAddress() {

    return (
        <>
            <div className='shipping-adress'>
                <h2 className="font-700">Contact Information</h2>
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
                    }}
                />
                <h2 className="font-700">Shipping Address</h2>
                <div className='flex flex-col gap-y-4 w-full'>
                    <TextField
                        className="w-full"
                        id="outlined-number"
                        label="Select Country"
                        placeholder="Select Country"
                        type="text"
                        InputProps={{
                            startAdornment: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1239_4096)">
                                    <path
                                        d="M9.99973 13.3333C10.3878 13.3341 10.7706 13.2445 11.1181 13.0717L12.7847 12.2383C13.6342 11.8165 14.1701 10.9485 14.1664 10V7.52752C14.1693 6.5799 13.6336 5.71295 12.7847 5.2917L11.1181 4.45838C10.4139 4.10838 9.58641 4.10838 8.88223 4.45838L7.21555 5.2917C6.36641 5.71271 5.83028 6.57975 5.83305 7.52752V10C5.83 10.9479 6.36575 11.8151 7.21473 12.2367L8.88141 13.07C9.22868 13.2434 9.61157 13.3336 9.99973 13.3333ZM7.49973 10V7.52752C7.50106 7.44252 7.5154 7.35818 7.54223 7.27752L9.35891 8.18584C9.76235 8.38748 10.2372 8.38748 10.6406 8.18584L12.4573 7.27752C12.4841 7.35818 12.4984 7.44252 12.4998 7.52752V10C12.5011 10.3162 12.3223 10.6056 12.0389 10.7458L10.3723 11.5792C10.1373 11.6954 9.86145 11.6954 9.62645 11.5792L7.95977 10.7458C7.67668 10.6053 7.49825 10.316 7.49973 10ZM15.8331 18.3333H13.5756L16.4814 15.6483C20.0613 12.0686 20.0613 6.26459 16.4816 2.68471C12.9018 -0.895176 7.09786 -0.895215 3.51797 2.68451C-0.0619091 6.26424 -0.0619875 12.0683 3.51778 15.6481C3.52563 15.656 6.42391 18.3333 6.42391 18.3333H4.16641C3.70618 18.3333 3.33309 18.7064 3.33309 19.1667C3.33309 19.6269 3.70618 20 4.16641 20H15.8331C16.2933 20 16.6664 19.6269 16.6664 19.1667C16.6664 18.7065 16.2933 18.3333 15.8331 18.3333ZM4.69641 3.86334C7.61891 0.927715 12.3679 0.91709 15.3035 3.83959C18.2391 6.76209 18.2497 11.511 15.3272 14.4467L12.0064 17.5142C10.873 18.5825 9.10149 18.5763 7.97559 17.5L4.69641 14.47C1.772 11.5392 1.77204 6.7942 4.69641 3.86334Z"
                                        fill="#979AB8" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1239_4096">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>,
                            endAdornment: <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.25838 0.0656921C1.42253 0.065472 1.5851 0.0977595 1.73671 0.160692C1.88832 0.223624 2.02597 0.315955 2.14171 0.432358L8.53588 6.82568C8.72934 7.0192 8.95903 7.1727 9.21183 7.27743C9.46463 7.38217 9.73558 7.43607 10.0092 7.43607C10.2828 7.43607 10.5538 7.38217 10.8066 7.27743C11.0594 7.1727 11.2891 7.0192 11.4825 6.82568L17.8667 0.440691C17.982 0.321304 18.12 0.226076 18.2725 0.160565C18.425 0.0950539 18.589 0.0605715 18.755 0.0591292C18.9209 0.057687 19.0855 0.0893138 19.2392 0.152165C19.3928 0.215016 19.5323 0.307832 19.6497 0.425198C19.7671 0.542564 19.8599 0.682128 19.9227 0.835748C19.9856 0.989369 20.0172 1.15397 20.0158 1.31994C20.0143 1.48592 19.9799 1.64994 19.9143 1.80245C19.8488 1.95495 19.7536 2.09288 19.6342 2.20819L13.25 8.59318C12.39 9.45166 11.2244 9.93381 10.0092 9.93381C8.79401 9.93381 7.62846 9.45166 6.76838 8.59318L0.374213 2.19986C0.199283 2.02504 0.0801409 1.80226 0.0318625 1.55971C-0.016416 1.31716 0.00833916 1.06574 0.102995 0.83726C0.197652 0.608783 0.357955 0.413518 0.56362 0.276174C0.769286 0.13883 1.01107 0.06558 1.25838 0.0656921Z"
                                    fill="#D6D8EA" />
                            </svg>
                        }}
                    />
                    <div className="flex gap-x-6">
                        <TextField
                            className="w-full"
                            id="outlined-number"
                            label="First Name"
                            placeholder="First Name"
                            type="text"
                            InputProps={{
                                startAdornment: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_571_3747)">
                                        <path
                                            d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22844 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11595 1.66667 10 1.66667Z"
                                            fill="#979AB8" />
                                        <path
                                            d="M10 11.667C8.01155 11.6692 6.10518 12.4601 4.69914 13.8661C3.29309 15.2722 2.50221 17.1785 2.5 19.167C2.5 19.388 2.5878 19.6 2.74408 19.7562C2.90036 19.9125 3.11232 20.0003 3.33333 20.0003C3.55435 20.0003 3.76631 19.9125 3.92259 19.7562C4.07887 19.6 4.16667 19.388 4.16667 19.167C4.16667 17.6199 4.78125 16.1362 5.87521 15.0422C6.96917 13.9482 8.4529 13.3337 10 13.3337C11.5471 13.3337 13.0308 13.9482 14.1248 15.0422C15.2188 16.1362 15.8333 17.6199 15.8333 19.167C15.8333 19.388 15.9211 19.6 16.0774 19.7562C16.2337 19.9125 16.4457 20.0003 16.6667 20.0003C16.8877 20.0003 17.0996 19.9125 17.2559 19.7562C17.4122 19.6 17.5 19.388 17.5 19.167C17.4978 17.1785 16.7069 15.2722 15.3009 13.8661C13.8948 12.4601 11.9884 11.6692 10 11.667Z"
                                            fill="#979AB8" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_571_3747">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }}
                        />
                        <TextField
                            className="w-full"
                            id="outlined-number"
                            label="Last Name"
                            placeholder="Last Name"
                            type="text"
                            InputProps={{
                                startAdornment:
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_571_3797)">
                                            <path
                                                d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22844 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11595 1.66667 10 1.66667Z"
                                                fill="#979AB8" />
                                            <path
                                                d="M10 11.667C8.01155 11.6692 6.10518 12.4601 4.69914 13.8661C3.29309 15.2722 2.50221 17.1785 2.5 19.167C2.5 19.388 2.5878 19.6 2.74408 19.7562C2.90036 19.9125 3.11232 20.0003 3.33333 20.0003C3.55435 20.0003 3.76631 19.9125 3.92259 19.7562C4.07887 19.6 4.16667 19.388 4.16667 19.167C4.16667 17.6199 4.78125 16.1362 5.87521 15.0422C6.96917 13.9482 8.4529 13.3337 10 13.3337C11.5471 13.3337 13.0308 13.9482 14.1248 15.0422C15.2188 16.1362 15.8333 17.6199 15.8333 19.167C15.8333 19.388 15.9211 19.6 16.0774 19.7562C16.2337 19.9125 16.4457 20.0003 16.6667 20.0003C16.8877 20.0003 17.0996 19.9125 17.2559 19.7562C17.4122 19.6 17.5 19.388 17.5 19.167C17.4978 17.1785 16.7069 15.2722 15.3009 13.8661C13.8948 12.4601 11.9884 11.6692 10 11.667Z"
                                                fill="#979AB8" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_571_3797">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                            }}
                        />
                    </div>
                    <TextField
                        className="w-full"
                        id="outlined-number"
                        label="Address"
                        placeholder="Address"
                        type="text"
                        InputProps={{
                            startAdornment:
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.1667 4.64906L12.3333 0.712398C11.6452 0.244395 10.8322 -0.00585938 10 -0.00585938C9.16779 -0.00585937 8.35481 0.244395 7.66667 0.712398L1.83333 4.64906C1.26846 5.03088 0.805914 5.54547 0.486271 6.14771C0.166627 6.74995 -0.000345349 7.42142 5.36283e-07 8.10323V15.8332C0.00132375 16.9379 0.440735 17.9969 1.22185 18.778C2.00297 19.5592 3.062 19.9986 4.16667 19.9999H15.8333C16.938 19.9986 17.997 19.5592 18.7782 18.778C19.5593 17.9969 19.9987 16.9379 20 15.8332V8.10323C20.0003 7.42142 19.8334 6.74995 19.5137 6.14771C19.1941 5.54547 18.7315 5.03088 18.1667 4.64906ZM18.3333 15.8332C18.3333 16.4963 18.0699 17.1322 17.6011 17.601C17.1323 18.0698 16.4964 18.3332 15.8333 18.3332H4.16667C3.50363 18.3332 2.86774 18.0698 2.3989 17.601C1.93006 17.1322 1.66667 16.4963 1.66667 15.8332V8.10323C1.66664 7.694 1.76708 7.29101 1.95917 6.92966C2.15125 6.5683 2.4291 6.25963 2.76833 6.03073L8.60167 2.09406C9.01416 1.81383 9.50133 1.664 10 1.664C10.4987 1.664 10.9858 1.81383 11.3983 2.09406L17.2317 6.03073C17.5709 6.25963 17.8488 6.5683 18.0408 6.92966C18.2329 7.29101 18.3334 7.694 18.3333 8.10323V15.8332ZM10 5.83823C9.0102 5.83811 8.04264 6.13176 7.21987 6.682C6.3971 7.23223 5.75616 8.01428 5.37822 8.92909C5.00029 9.84389 4.90237 10.8503 5.09688 11.8208C5.29139 12.7913 5.76956 13.6822 6.47083 14.3807L7.99083 15.8674C8.52944 16.389 9.24981 16.6806 9.99959 16.6806C10.7494 16.6806 11.4697 16.389 12.0083 15.8674L13.5358 14.3741C14.2352 13.6748 14.7115 12.7838 14.9045 11.8138C15.0975 10.8439 14.9985 9.83844 14.62 8.92473C14.2415 8.01103 13.6005 7.23009 12.7782 6.68069C11.9558 6.13129 10.989 5.83811 10 5.83823ZM12.3633 13.1891L10.8425 14.6766C10.6165 14.8954 10.3142 15.0178 9.99959 15.0178C9.68496 15.0178 9.38268 14.8954 9.15667 14.6766L7.6425 13.1957C7.17663 12.7298 6.85928 12.1363 6.73053 11.4902C6.60177 10.844 6.6674 10.1742 6.91912 9.5653C7.17083 8.95641 7.59734 8.43578 8.14478 8.06916C8.69222 7.70254 9.33603 7.50638 9.99489 7.50545C10.6537 7.50452 11.2981 7.69886 11.8466 8.06393C12.3951 8.42901 12.823 8.94843 13.0765 9.5566C13.3299 10.1648 13.3974 10.8344 13.2705 11.4809C13.1436 12.1274 12.8279 12.7219 12.3633 13.1891ZM10.8333 10.8332C10.8333 10.998 10.7845 11.1592 10.6929 11.2962C10.6013 11.4332 10.4712 11.5401 10.3189 11.6031C10.1666 11.6662 9.99908 11.6827 9.83743 11.6506C9.67578 11.6184 9.52729 11.539 9.41075 11.4225C9.2942 11.3059 9.21483 11.1575 9.18268 10.9958C9.15053 10.8342 9.16703 10.6666 9.2301 10.5143C9.29317 10.3621 9.39998 10.2319 9.53703 10.1403C9.67407 10.0488 9.83518 9.9999 10 9.9999C10.221 9.9999 10.433 10.0877 10.5893 10.244C10.7455 10.4003 10.8333 10.6122 10.8333 10.8332Z"
                                        fill="#979AB8" />
                                </svg>
                        }}
                    />
                    <TextField
                        className="w-full"
                        id="outlined-number"
                        label="Apartment,suit,etc(Optional)"
                        placeholder="Apartment,suit,etc(Optional)"
                        type="text"
                        InputProps={{
                            startAdornment: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.83333 11.6667C5.83333 11.8877 5.74554 12.0996 5.58926 12.2559C5.43297 12.4122 5.22101 12.5 5 12.5H4.16667C3.94565 12.5 3.73369 12.4122 3.57741 12.2559C3.42113 12.0996 3.33333 11.8877 3.33333 11.6667C3.33333 11.4457 3.42113 11.2337 3.57741 11.0774C3.73369 10.9211 3.94565 10.8333 4.16667 10.8333H5C5.22101 10.8333 5.43297 10.9211 5.58926 11.0774C5.74554 11.2337 5.83333 11.4457 5.83333 11.6667ZM9.16667 10.8333H8.33333C8.11232 10.8333 7.90036 10.9211 7.74408 11.0774C7.5878 11.2337 7.5 11.4457 7.5 11.6667C7.5 11.8877 7.5878 12.0996 7.74408 12.2559C7.90036 12.4122 8.11232 12.5 8.33333 12.5H9.16667C9.38768 12.5 9.59964 12.4122 9.75592 12.2559C9.9122 12.0996 10 11.8877 10 11.6667C10 11.4457 9.9122 11.2337 9.75592 11.0774C9.59964 10.9211 9.38768 10.8333 9.16667 10.8333ZM5 14.1667H4.16667C3.94565 14.1667 3.73369 14.2545 3.57741 14.4107C3.42113 14.567 3.33333 14.779 3.33333 15C3.33333 15.221 3.42113 15.433 3.57741 15.5893C3.73369 15.7455 3.94565 15.8333 4.16667 15.8333H5C5.22101 15.8333 5.43297 15.7455 5.58926 15.5893C5.74554 15.433 5.83333 15.221 5.83333 15C5.83333 14.779 5.74554 14.567 5.58926 14.4107C5.43297 14.2545 5.22101 14.1667 5 14.1667ZM9.16667 14.1667H8.33333C8.11232 14.1667 7.90036 14.2545 7.74408 14.4107C7.5878 14.567 7.5 14.779 7.5 15C7.5 15.221 7.5878 15.433 7.74408 15.5893C7.90036 15.7455 8.11232 15.8333 8.33333 15.8333H9.16667C9.38768 15.8333 9.59964 15.7455 9.75592 15.5893C9.9122 15.433 10 15.221 10 15C10 14.779 9.9122 14.567 9.75592 14.4107C9.59964 14.2545 9.38768 14.1667 9.16667 14.1667ZM5 4.16667H4.16667C3.94565 4.16667 3.73369 4.25446 3.57741 4.41074C3.42113 4.56702 3.33333 4.77899 3.33333 5C3.33333 5.22101 3.42113 5.43297 3.57741 5.58926C3.73369 5.74554 3.94565 5.83333 4.16667 5.83333H5C5.22101 5.83333 5.43297 5.74554 5.58926 5.58926C5.74554 5.43297 5.83333 5.22101 5.83333 5C5.83333 4.77899 5.74554 4.56702 5.58926 4.41074C5.43297 4.25446 5.22101 4.16667 5 4.16667ZM9.16667 4.16667H8.33333C8.11232 4.16667 7.90036 4.25446 7.74408 4.41074C7.5878 4.56702 7.5 4.77899 7.5 5C7.5 5.22101 7.5878 5.43297 7.74408 5.58926C7.90036 5.74554 8.11232 5.83333 8.33333 5.83333H9.16667C9.38768 5.83333 9.59964 5.74554 9.75592 5.58926C9.9122 5.43297 10 5.22101 10 5C10 4.77899 9.9122 4.56702 9.75592 4.41074C9.59964 4.25446 9.38768 4.16667 9.16667 4.16667ZM5 7.5H4.16667C3.94565 7.5 3.73369 7.5878 3.57741 7.74408C3.42113 7.90036 3.33333 8.11232 3.33333 8.33333C3.33333 8.55435 3.42113 8.76631 3.57741 8.92259C3.73369 9.07887 3.94565 9.16667 4.16667 9.16667H5C5.22101 9.16667 5.43297 9.07887 5.58926 8.92259C5.74554 8.76631 5.83333 8.55435 5.83333 8.33333C5.83333 8.11232 5.74554 7.90036 5.58926 7.74408C5.43297 7.5878 5.22101 7.5 5 7.5ZM9.16667 7.5H8.33333C8.11232 7.5 7.90036 7.5878 7.74408 7.74408C7.5878 7.90036 7.5 8.11232 7.5 8.33333C7.5 8.55435 7.5878 8.76631 7.74408 8.92259C7.90036 9.07887 8.11232 9.16667 8.33333 9.16667H9.16667C9.38768 9.16667 9.59964 9.07887 9.75592 8.92259C9.9122 8.76631 10 8.55435 10 8.33333C10 8.11232 9.9122 7.90036 9.75592 7.74408C9.59964 7.5878 9.38768 7.5 9.16667 7.5ZM20 8.33333V15.8333C19.9987 16.938 19.5593 17.997 18.7782 18.7782C17.997 19.5593 16.938 19.9987 15.8333 20H4.16667C3.062 19.9987 2.00296 19.5593 1.22185 18.7782C0.440735 17.997 0.00132321 16.938 0 15.8333L0 4.16667C0.00132321 3.062 0.440735 2.00296 1.22185 1.22185C2.00296 0.440735 3.062 0.00132321 4.16667 0L9.16667 0C10.2713 0.00132321 11.3304 0.440735 12.1115 1.22185C12.8926 2.00296 13.332 3.062 13.3333 4.16667H15.8333C16.938 4.16799 17.997 4.6074 18.7782 5.38852C19.5593 6.16963 19.9987 7.22867 20 8.33333ZM4.16667 18.3333H11.6667V4.16667C11.6667 3.50363 11.4033 2.86774 10.9344 2.3989C10.4656 1.93006 9.82971 1.66667 9.16667 1.66667H4.16667C3.50363 1.66667 2.86774 1.93006 2.3989 2.3989C1.93006 2.86774 1.66667 3.50363 1.66667 4.16667V15.8333C1.66667 16.4964 1.93006 17.1323 2.3989 17.6011C2.86774 18.0699 3.50363 18.3333 4.16667 18.3333ZM18.3333 8.33333C18.3333 7.67029 18.0699 7.03441 17.6011 6.56557C17.1323 6.09673 16.4964 5.83333 15.8333 5.83333H13.3333V18.3333H15.8333C16.4964 18.3333 17.1323 18.0699 17.6011 17.6011C18.0699 17.1323 18.3333 16.4964 18.3333 15.8333V8.33333ZM15.8333 10.8333C15.6685 10.8333 15.5074 10.8822 15.3704 10.9738C15.2333 11.0653 15.1265 11.1955 15.0634 11.3478C15.0004 11.5 14.9839 11.6676 15.016 11.8292C15.0482 11.9909 15.1275 12.1394 15.2441 12.2559C15.3606 12.3725 15.5091 12.4518 15.6708 12.484C15.8324 12.5161 16 12.4996 16.1522 12.4366C16.3045 12.3735 16.4347 12.2667 16.5262 12.1296C16.6178 11.9926 16.6667 11.8315 16.6667 11.6667C16.6667 11.4457 16.5789 11.2337 16.4226 11.0774C16.2663 10.9211 16.0543 10.8333 15.8333 10.8333ZM15.8333 14.1667C15.6685 14.1667 15.5074 14.2155 15.3704 14.3071C15.2333 14.3987 15.1265 14.5288 15.0634 14.6811C15.0004 14.8334 14.9839 15.0009 15.016 15.1626C15.0482 15.3242 15.1275 15.4727 15.2441 15.5893C15.3606 15.7058 15.5091 15.7852 15.6708 15.8173C15.8324 15.8495 16 15.833 16.1522 15.7699C16.3045 15.7068 16.4347 15.6 16.5262 15.463C16.6178 15.3259 16.6667 15.1648 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667ZM15.8333 7.5C15.6685 7.5 15.5074 7.54887 15.3704 7.64044C15.2333 7.73201 15.1265 7.86216 15.0634 8.01443C15.0004 8.1667 14.9839 8.33426 15.016 8.49591C15.0482 8.65756 15.1275 8.80604 15.2441 8.92259C15.3606 9.03913 15.5091 9.1185 15.6708 9.15065C15.8324 9.18281 16 9.16631 16.1522 9.10323C16.3045 9.04016 16.4347 8.93335 16.5262 8.79631C16.6178 8.65927 16.6667 8.49815 16.6667 8.33333C16.6667 8.11232 16.5789 7.90036 16.4226 7.74408C16.2663 7.5878 16.0543 7.5 15.8333 7.5Z"
                                    fill="#979AB8" />
                            </svg>
                        }}
                    />
                    <div className="flex gap-x-6">
                        <TextField
                            className="w-full"
                            id="outlined-number"
                            label="City"
                            placeholder="City"
                            type="text"
                            InputProps={{
                                endAdornment: <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.25838 0.0656921C1.42253 0.065472 1.5851 0.0977595 1.73671 0.160692C1.88832 0.223624 2.02597 0.315955 2.14171 0.432358L8.53588 6.82568C8.72934 7.0192 8.95903 7.1727 9.21183 7.27743C9.46463 7.38217 9.73558 7.43607 10.0092 7.43607C10.2828 7.43607 10.5538 7.38217 10.8066 7.27743C11.0594 7.1727 11.2891 7.0192 11.4825 6.82568L17.8667 0.440691C17.982 0.321304 18.12 0.226076 18.2725 0.160565C18.425 0.0950539 18.589 0.0605715 18.755 0.0591292C18.9209 0.057687 19.0855 0.0893138 19.2392 0.152165C19.3928 0.215016 19.5323 0.307832 19.6497 0.425198C19.7671 0.542564 19.8599 0.682128 19.9227 0.835748C19.9856 0.989369 20.0172 1.15397 20.0158 1.31994C20.0143 1.48592 19.9799 1.64994 19.9143 1.80245C19.8488 1.95495 19.7536 2.09288 19.6342 2.20819L13.25 8.59318C12.39 9.45166 11.2244 9.93381 10.0092 9.93381C8.79401 9.93381 7.62846 9.45166 6.76838 8.59318L0.374213 2.19986C0.199283 2.02504 0.0801409 1.80226 0.0318625 1.55971C-0.016416 1.31716 0.00833916 1.06574 0.102995 0.83726C0.197652 0.608783 0.357955 0.413518 0.56362 0.276174C0.769286 0.13883 1.01107 0.06558 1.25838 0.0656921Z"
                                        fill="#D6D8EA" />
                                </svg>
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            className="w-full"
                            id="outlined-number"
                            label="Past Code"
                            placeholder="Past Code"
                            type="text"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </div>
                </div>

                <ShippingMethod />
                <CreditCardInfo />
            </div>
        </>
    )
}