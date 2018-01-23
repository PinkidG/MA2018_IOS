//
//  LogClass.swift
//  iOS-Table-Example
//
//  Created by Philipp Pinkernelle on 23.01.18.
//  Copyright © 2018 Philipp Pinkernelle. All rights reserved.
//

import Foundation
import UIKit

//this is just a small class to show, how objects are created in Swift
class LogClass : NSObject {
    
    var username : String!
    var timestamp : NSDate!
    var colorstate : UIColor!
    
    init(username: String, timestamp: NSDate) {
        
        self.username = username;
        self.timestamp = timestamp;
        
        switch arc4random_uniform(4) {
        case 0:
            self.colorstate = UIColor.red
        case 1:
            self.colorstate = UIColor.green
        case 2:
            self.colorstate = UIColor.yellow
        default:
            self.colorstate = UIColor.black
        }

    }
}
