//
//  ViewController.swift
//  iOS-Hello-World
//
//  Created by Philipp Pinkernelle on 19.01.18.
//  Copyright © 2018 Philipp Pinkernelle. All rights reserved.
//

import UIKit

//This is a simple UIViewController it shows the first and only screen.
class ViewController: UIViewController {
    
    //This is connected to the Main.storyboard
    @IBOutlet weak var myLabel: UILabel!
    
    //This method will be called when initializing the first screen.
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //Set text of myLabel
        myLabel.text = "Hello World of iOS!"
        
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

