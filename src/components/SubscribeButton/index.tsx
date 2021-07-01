import styles from "./styles.module.scss"

interface  SubcribeProps{
    priceID:string
}


export function SubscribeButton({priceID}:SubcribeProps){

    return(
        <button
            type="button"
            className={styles.subscribeButton}
        >

            Subcribe now
        </button>
    )
}