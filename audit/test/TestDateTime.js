var testDateTimeOutput={
  "contracts" : 
  {
    "DateTime.sol:DateTime" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"}],\"name\":\"getNextMonth\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint16\"},{\"name\":\"month\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ORIGIN_YEAR\",\"outputs\":[{\"name\":\"\",\"type\":\"uint16\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getHour\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MINUTES_IN_HOUR\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"HOUR_IN_SECONDS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MINUTE_IN_SECONDS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getWeekday\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"DAY_IN_SECONDS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"DAYS_IN_WEEK\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getDay\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"LEAP_YEAR_IN_SECONDS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"YEAR_IN_SECONDS\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"}],\"name\":\"leapYearsBefore\",\"outputs\":[{\"name\":\"\",\"type\":\"uint16\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getSecond\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"},{\"name\":\"_day\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"},{\"name\":\"_day\",\"type\":\"uint8\"},{\"name\":\"_hour\",\"type\":\"uint8\"},{\"name\":\"_minutes\",\"type\":\"uint8\"},{\"name\":\"_seconds\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getYear\",\"outputs\":[{\"name\":\"\",\"type\":\"uint16\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getMonth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"}],\"name\":\"isLeapYear\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"HOURS_IN_DAY\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"}],\"name\":\"getBeginningOfMonth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"}],\"name\":\"getDaysInMonth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_timestamp\",\"type\":\"uint256\"}],\"name\":\"getMinute\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}]",
      "bin" : "610b95610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600436106101545763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663027a15d081146101595780632fdd854d1461018e5780633e239e1a146101ad5780633ff6d539146101ce57806342f19629146101e85780634a004080146101ce5780634ac1ad78146101f05780635fdc6281146101fb57806361ae15441461020357806365c728401461020b57806367bb0f95146102165780637847ea531461021e57806387d689f6146102265780638aa001fc146102355780638c8d98a0146102405780639054bdec1461025b57806392d6631314610288578063a324ad2414610293578063a6f0e5771461029e578063aef47ba9146102c1578063c489721b146102d6578063f6cc72af146102de578063fa65957d146102f3578063fa93f88314610308575b600080fd5b61016e61ffff6004351660ff60243516610313565b6040805161ffff909316835260ff90911660208301528051918290030190f35b610196610363565b6040805161ffff9092168252519081900360200190f35b6101b8600435610369565b6040805160ff9092168252519081900360200190f35b6101d6610391565b60408051918252519081900360200190f35b6101d6610396565b6101b860043561039c565b6101d66103c4565b6101d66103cb565b6101b86004356103d0565b6101d66103e5565b6101d66103ed565b61019661ffff600435166103f5565b6101b8600435610466565b6101d661ffff6004351660ff60243581169060443516610470565b6101d661ffff6004351660ff60243581169060443581169060643581169060843581169060a4351661048a565b610196600435610662565b6101b8600435610791565b6102ad61ffff600435166107a6565b604080519115158252519081900360200190f35b6101d661ffff6004351660ff602435166107f4565b6101d661080d565b6101d661ffff6004351660ff60243516610812565b6101b861ffff6004351660ff60243516610820565b6101b86004356108e7565b6000808260ff16600c14156103425761033761ffff8516600163ffffffff6108fb16565b91506001905061035c565b83915061035960ff8416600163ffffffff6108fb16565b90505b9250929050565b6107b281565b6000601861037f83610e1063ffffffff61090816565b81151561038857fe5b0690505b919050565b603c81565b610e1081565b6000600761037f60046103b8856201518063ffffffff61090816565b9063ffffffff6108fb16565b6201518081565b600781565b60006103db8261091d565b6040015192915050565b6301e2850081565b6301e1338081565b600061040c61ffff8316600163ffffffff610ad216565b915061046061042761ffff841661019063ffffffff61090816565b6103b861043f61ffff8616606463ffffffff61090816565b61045461ffff8716600463ffffffff61090816565b9063ffffffff610ad216565b92915050565b6000603c82610388565b6000610482848484600080600061048a565b949350505050565b600080610495610b0d565b6107b291505b8861ffff168261ffff1610156104f6576104b4826107a6565b156104d4576104cd836301e2850063ffffffff6108fb16565b92506104eb565b6104e8836301e1338063ffffffff6108fb16565b92505b81600101915061049b565b601f8152610503896107a6565b1561051457601d602082015261051c565b601c60208201525b601f60408201819052601e606083018190526080830182905260a0830181905260c0830182905260e0830182905261010083018190526101208301829052610140830152610160820152600191505b8760ff168261ffff1610156105d2576105c56105b88261059661ffff8616600163ffffffff610ad216565b600c81106105a057fe5b6020020151620151809060ff1663ffffffff610ae416565b849063ffffffff6108fb16565b925081600101915061056b565b61060d6105b860ff8916156105fa576105f560ff8a16600163ffffffff610ad216565b6105fd565b60005b620151809063ffffffff610ae416565b92506106276105b8610e1060ff891663ffffffff610ae416565b92506106406105b8603c60ff881663ffffffff610ae416565b92506106558360ff861663ffffffff6108fb16565b9998505050505050505050565b600080808061068d61067e866301e1338063ffffffff61090816565b6107b29063ffffffff6108fb16565b91506106ba61069d6107b26103f5565b61ffff166106aa846103f5565b61ffff169063ffffffff610ad216565b90506106d76105b86301e2850061ffff841663ffffffff610ae416565b925061070e6105b86106fd61ffff808516906104549087166107b263ffffffff610ad216565b6301e133809063ffffffff610ae416565b92505b848311156107895761073661073161ffff8416600163ffffffff610ad216565b6107a6565b156107565761074f836301e2850063ffffffff610ad216565b925061076d565b61076a836301e1338063ffffffff610ad216565b92505b61078261ffff8316600163ffffffff610ad216565b9150610711565b509392505050565b600061079c8261091d565b6020015192915050565b600060038216156107b95750600061038c565b606461ffff83160661ffff16156107d25750600161038c565b61019061ffff83160661ffff16156107ec5750600061038c565b506001919050565b6000610806838360008060008061048a565b9392505050565b601881565b600061080683836001610470565b60008160ff166001148061083757508160ff166003145b8061084557508160ff166005145b8061085357508160ff166007145b8061086157508160ff166008145b8061086f57508160ff16600a145b8061087d57508160ff16600c145b1561088a5750601f610460565b8160ff166004148061089f57508160ff166006145b806108ad57508160ff166009145b806108bb57508160ff16600b145b156108c85750601e610460565b6108d1836107a6565b156108de5750601d610460565b50601c92915050565b6000603c61037f838263ffffffff61090816565b8181018281101561046057fe5b6000818381151561091557fe5b049392505050565b610925610b2d565b600080808061093386610662565b61ffff1685526109446107b26103f5565b855161094f906103f5565b0361ffff1692506109746109676301e2850085610ae4565b859063ffffffff6108fb16565b855190945061099d90610967906106fd9086906104549061ffff166107b263ffffffff610ad216565b9350600191505b600c60ff831611610a17576109d36109c0866000015184610820565b620151809060ff1663ffffffff610ae416565b9050856109e6828663ffffffff6108fb16565b11156109fa5760ff82166020860152610a17565b610a0a848263ffffffff6108fb16565b93508160010191506109a4565b600191505b610a2e85600001518660200151610820565b60ff168260ff16111515610a845785610a50620151808663ffffffff6108fb16565b1115610a645760ff82166040860152610a84565b610a77846201518063ffffffff6108fb16565b9350816001019150610a1c565b610a8d86610369565b60ff166060860152610a9e866108e7565b60ff166080860152610aaf86610466565b60ff1660a0860152610ac08661039c565b60ff1660c08601525092949350505050565b600082821115610ade57fe5b50900390565b6000821515610af557506000610460565b50818102818382811515610b0557fe5b041461046057fe5b61018060405190810160405280600c906020820280388339509192915050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152905600a165627a7a723058202641d2e8b8285a907d7ec51d8e372470d0772ad4c44a83efd4f3fcedc54478820029"
    },
    "TestDateTime.sol:TestDateTime" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"_year\",\"type\":\"uint16\"},{\"name\":\"_month\",\"type\":\"uint8\"},{\"name\":\"_day\",\"type\":\"uint8\"},{\"name\":\"_hour\",\"type\":\"uint8\"},{\"name\":\"_minutes\",\"type\":\"uint8\"},{\"name\":\"_seconds\",\"type\":\"uint8\"}],\"name\":\"toTimestamp\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_time\",\"type\":\"uint256\"}],\"name\":\"fromTimestamp\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint16\"},{\"name\":\"month\",\"type\":\"uint8\"},{\"name\":\"day\",\"type\":\"uint8\"},{\"name\":\"hour\",\"type\":\"uint8\"},{\"name\":\"minute\",\"type\":\"uint8\"},{\"name\":\"second\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}]",
      "bin" : "608060405234801561001057600080fd5b506105a6806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639054bdec8114610050578063e82a27a41461009c575b600080fd5b34801561005c57600080fd5b5061008a61ffff6004351660ff60243581169060443581169060643581169060843581169060a435166100f3565b60408051918252519081900360200190f35b3480156100a857600080fd5b506100b46004356101c5565b6040805161ffff909716875260ff95861660208801529385168685015291841660608601528316608085015290911660a0830152519081900360c00190f35b604080517f9054bdec00000000000000000000000000000000000000000000000000000000815261ffff8816600482015260ff8088166024830152808716604483015280861660648301528085166084830152831660a4820152905160009173__DateTime.sol:DateTime_________________91639054bdec9160c480820192602092909190829003018186803b15801561018e57600080fd5b505af41580156101a2573d6000803e3d6000fd5b505050506040513d60208110156101b857600080fd5b5051979650505050505050565b60008060008060008073__DateTime.sol:DateTime_________________6392d66313886040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b15801561023957600080fd5b505af415801561024d573d6000803e3d6000fd5b505050506040513d602081101561026357600080fd5b5051604080517fa324ad24000000000000000000000000000000000000000000000000000000008152600481018a9052905191975073__DateTime.sol:DateTime_________________9163a324ad2491602480820192602092909190829003018186803b1580156102d457600080fd5b505af41580156102e8573d6000803e3d6000fd5b505050506040513d60208110156102fe57600080fd5b5051604080517f65c72840000000000000000000000000000000000000000000000000000000008152600481018a9052905191965073__DateTime.sol:DateTime_________________916365c7284091602480820192602092909190829003018186803b15801561036f57600080fd5b505af4158015610383573d6000803e3d6000fd5b505050506040513d602081101561039957600080fd5b5051604080517f3e239e1a000000000000000000000000000000000000000000000000000000008152600481018a9052905191955073__DateTime.sol:DateTime_________________91633e239e1a91602480820192602092909190829003018186803b15801561040a57600080fd5b505af415801561041e573d6000803e3d6000fd5b505050506040513d602081101561043457600080fd5b5051604080517ffa93f883000000000000000000000000000000000000000000000000000000008152600481018a9052905191945073__DateTime.sol:DateTime_________________9163fa93f88391602480820192602092909190829003018186803b1580156104a557600080fd5b505af41580156104b9573d6000803e3d6000fd5b505050506040513d60208110156104cf57600080fd5b5051604080517f8aa001fc000000000000000000000000000000000000000000000000000000008152600481018a9052905191935073__DateTime.sol:DateTime_________________91638aa001fc91602480820192602092909190829003018186803b15801561054057600080fd5b505af4158015610554573d6000803e3d6000fd5b505050506040513d602081101561056a57600080fd5b50519597949650929491939092505600a165627a7a72305820c16784281df0d93244dfa9794a7822d0d80fb1694da3b49ab4b718fb65d4741b0029"
    },
    "math/SafeMath.sol:SafeMath" : 
    {
      "abi" : "[]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820861671fa48df176fb768d740a24f8d509c9e6a084edfc5aa11bde5fc314897500029"
    }
  },
  "version" : "0.4.24+commit.e67f0147.Darwin.appleclang"
};
