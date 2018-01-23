//
//  DetailViewController.swift
//  iOS-Table-Example
//
//  Created by Philipp Pinkernelle on 23.01.18.
//  Copyright © 2018 Philipp Pinkernelle. All rights reserved.
//

import UIKit

class DetailViewController: UIViewController {

    @IBOutlet weak var detailDescriptionLabel: UILabel!
    @IBOutlet weak var statusView: UIView!
    

    func configureView() {
        // Update the user interface for the detail item.
        if let detail = detailItem {
            if let label = detailDescriptionLabel {
                label.text = "This was an log genereated from \(detail.username!)\n at \(detail.timestamp!)."
                statusView.backgroundColor = detail.colorstate
            }
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        configureView()
    }

    var detailItem: LogClass? {
        didSet {
            // Update the view.
            configureView()
        }
    }


}

