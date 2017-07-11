function ZipFiles
{
	param($sourcedir, $zipfilename)
	Add-Type -Assembly System.IO.Compression.FileSystem
	$compressionLevel = [System.IO.Compression.CompressionLevel]::Optimal
	[System.IO.Compression.ZipFile]::CreateFromDirectory($sourcedir,
		$zipfilename, $compressionLevel, $false)
}

$now = Get-Date -format MM_dd_yyyy;
Set-Location "D:\git_Repos";
mkdir ".\backups\$now";


Get-ChildItem -Path "D:\git_Repos" -Directory | ForEach-Object {
	$dirName = $_.Name;

	Set-Location $_.Name;
	Write-Host "Creating bundle for $dirName";
	git bundle create "..\backups\$now\$dirName.bundle" --all;
	Set-Location ..;
}

#repos
Write-Host "Copying repo backups to temp";
Copy-Item -Path "D:\git_Repos\backups" -Destination "D:\temp\$now\repos" -Recurse

#data
Write-Host "Copying multi_synco to temp"
Copy-Item -Path "D:\FL Department of Elder Affairs\DOEA SP Development - Developer Files\multi_synco" -Destination "D:\temp\$now\multi_synco" -Recurse

#zip
Write-Host "Zipping backup"
ZipFiles -sourcedir "D:\temp\$now" -zipfilename "D:\temp\$now.zip"

Write-Host "All Done"