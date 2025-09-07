# PowerShell script to create thumbnail versions of images
Add-Type -AssemblyName System.Drawing

function Create-Thumbnail {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$ThumbWidth = 300,
        [int]$ThumbHeight = 200,
        [int]$Quality = 80
    )
    
    try {
        # Load the original image
        $originalImage = [System.Drawing.Image]::FromFile($InputPath)
        
        # Create thumbnail bitmap
        $thumbnail = New-Object System.Drawing.Bitmap $ThumbWidth, $ThumbHeight
        $graphics = [System.Drawing.Graphics]::FromImage($thumbnail)
        
        # Set high quality settings for thumbnails
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        # Calculate aspect ratios for proper cropping
        $originalAspect = $originalImage.Width / $originalImage.Height
        $thumbAspect = $ThumbWidth / $ThumbHeight
        
        # Calculate crop dimensions
        if ($originalAspect -gt $thumbAspect) {
            # Original is wider - crop width
            $cropHeight = $originalImage.Height
            $cropWidth = [int]($cropHeight * $thumbAspect)
            $cropX = [int](($originalImage.Width - $cropWidth) / 2)
            $cropY = 0
        } else {
            # Original is taller - crop height  
            $cropWidth = $originalImage.Width
            $cropHeight = [int]($cropWidth / $thumbAspect)
            $cropX = 0
            $cropY = [int](($originalImage.Height - $cropHeight) / 2)
        }
        
        # Create rectangles for cropping and destination
        $cropRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropWidth, $cropHeight
        $destRect = New-Object System.Drawing.Rectangle 0, 0, $ThumbWidth, $ThumbHeight
        
        # Draw the cropped and resized thumbnail
        $graphics.DrawImage($originalImage, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
        
        # Set up encoder parameters for JPEG quality
        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
        
        # Save the thumbnail
        $thumbnail.Save($OutputPath, $encoder, $encoderParams)
        
        # Clean up
        $graphics.Dispose()
        $thumbnail.Dispose()
        $originalImage.Dispose()
        
        Write-Host "Created thumbnail: $OutputPath (${ThumbWidth}x${ThumbHeight})" -ForegroundColor Green
        
    } catch {
        Write-Host "Error creating thumbnail for $InputPath : $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Get current directory
$currentDir = Get-Location

# Create thumbnails for all JPG images (excluding AVIF files for now)
$imageFiles = Get-ChildItem "*.jpg" | Where-Object { $_.Name -notlike "*thumb*" }

Write-Host "Creating thumbnails (300x200) for project images..." -ForegroundColor Yellow

foreach ($file in $imageFiles) {
    $inputPath = $file.FullName
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $outputPath = Join-Path $currentDir "${baseName}-thumb.jpg"
    
    Create-Thumbnail -InputPath $inputPath -OutputPath $outputPath -ThumbWidth 300 -ThumbHeight 200 -Quality 80
    
    # Get file size
    $thumbSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
    Write-Host "  Thumbnail size: ${thumbSize} KB" -ForegroundColor Cyan
}

Write-Host "`nThumbnail creation complete!" -ForegroundColor Green
Write-Host "Thumbnails are 300x200 pixels optimized for web display." -ForegroundColor Yellow
