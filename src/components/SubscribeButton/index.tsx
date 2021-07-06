import { signIn, useSession } from "next-auth/client"
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss"

interface  SubcribeProps{
    priceID:string
}


export function  SubscribeButton({priceID}:SubcribeProps){
   const [session] = useSession();

    async function handleSubscribe() {
        if(!session){
            signIn('github')
            return
        }

        try{
            const response =  await api.post('/subscribe')

            const {sessionId} = response.data

            const stripe = await getStripeJs();

            await stripe.redirectToCheckout({sessionId});
        }catch(err){
            alert(err.menssage);
        }
    }

    return(
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={()=>handleSubscribe()}
        >
            Subcribe now
        </button>
    )
}

