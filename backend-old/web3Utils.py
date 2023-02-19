from web3 import Web3
from .eth_keys import PRIV_KEY_ETH

def transfer(ammount: float, to_address: str="0x1ADc492DFcA75da5e8b88cDF3ca71fe903397C68") -> str:
    web3 = Web3(Web3.HTTPProvider(
        'https://ropsten.infura.io/v3/a3fd5dee503343f9b2007f67f408e184'))

    bank = "0x18Ac030B5A633f2b79c79233E732878f88A9e28C"
    private = PRIV_KEY_ETH
  
    nonce = web3.eth.getTransactionCount(bank)
    
    tx = {
        'nonce': nonce,
        'to': web3.toChecksumAddress(to_address),
        'value': web3.toWei(ammount, 'ether'),
        'gas': 21000,
        'gasPrice': web3.toWei('50', 'gwei')
    }

    signed_tx = web3.eth.account.signTransaction(tx, private)
    tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
    return str(web3.toHex(tx_hash))

