import React from "react"
import styles from "./modal.module.css";

const Modal = ({ status, text,  }) => {
return(
    <>
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    {
                        status === "success" ?

                        <svg aria-hidden="true" style={{ width: "30px", height: "30px" }} fill="green" stroke="currentColor" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path></svg>
                        :

                    <svg aria-hidden="true"  style={{width:"30px",height:"30px"}} fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    }

                    <h5 className={styles.heading} style={{
                        color: status === "success" ? "green" : "red"
                    }}>{status}</h5>
                </div>
               
                <div className={styles.modalContent}>
                    {text}
                </div>
            </div>
        </div>
    </>
)
}
export default Modal;